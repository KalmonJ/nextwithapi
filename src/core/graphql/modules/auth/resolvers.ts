import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Resolvers } from "__generated__/resolvers-types";

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

        return { token };
      }

      throw new Error("email or password invalid!");
    },
  },
};

export const getSession = (authToken: string): jwt.JwtPayload =>
  jwt.verify(authToken, process.env.JWT_SECRET || "") as jwt.JwtPayload;
