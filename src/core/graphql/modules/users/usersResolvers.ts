import Users from "core/models/Users";
import { GraphQLError } from "graphql";
import { Resolvers, User } from "__generated__/resolvers-types";
import { ErrorMessages } from "../carts/resolvers";

export const usersResolvers: Resolvers = {
  Query: {
    users: async (_, __, ctx) => {
      if (!ctx.authUser) throw new GraphQLError(ErrorMessages.UNAUTHORIZED);
      return await ctx.users.find();
    },
    getUser: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError(ErrorMessages.UNAUTHORIZED);

      const user = await ctx.users.findById(args.id);

      if (!user) {
        throw new GraphQLError(ErrorMessages.USERNOTFOUND);
      }

      return user;
    },
  },

  Mutation: {
    createUser: async (_, args, ctx) => {
      const newUser = new ctx.users(args.data);
      const user = await ctx.users.find({ email: args.data!.email });

      if (!!user.length) {
        throw new GraphQLError(`Email: ${args.data!.email} already in use`);
      }

      newUser.save();
      return newUser;
    },
  },
};

export const getByEmail = async (
  email: string,
  users: typeof Users
): Promise<User> => {
  const [user] = await users.find({ email }).populate("cart");
  if (!user) throw new GraphQLError("User not found!");
  return user as any;
};
