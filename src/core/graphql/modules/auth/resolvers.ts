import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import cookie from "cookie";
import { Resolvers } from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";

export const loginResolvers: Resolvers = {
  Query: {
    login: async (_, args, ctx) => {
      const [user] = await ctx.users.find({ email: args.data!.email });
      const match = await bcrypt.compare(args.data!.password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: {
              username: user.username,
              email: user.email,
              id: user.id,
              profileImage: user.profileImage,
            },
          },
          process.env.JWT_SECRET as string
        );

        ctx.res.setHeader(
          "set-cookie",
          cookie.serialize("access", token, {
            maxAge: 60 * 60 * 24, // 1 day
            httpOnly: true,
          })
        );

        return { token };
      }

      throw new GraphQLError("email or password invalid!");
    },

    getSession: (_, __, ctx) => {
      if (ctx.authUser) return ctx.authUser;
    },
  },
};

export const getSession = (authToken: string): jwt.JwtPayload =>
  jwt.verify(authToken, process.env.JWT_SECRET || "") as jwt.JwtPayload;
