import Users from "core/models/Users";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Login } from "types/User";

export const loginResolvers = {
  Query: {
    login: async (_: any, args: Login) => {
      const [user] = await Users.find({ email: args.data.email });
      const match = await bcrypt.compare(args.data.password, user.password);
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
