import Users from "core/models/Users";
import { GraphQLError } from "graphql";
import { Cart, Resolvers, User } from "__generated__/resolvers-types";
import { ErrorMessages } from "../carts/resolvers";

export const usersResolvers: Resolvers = {
  Query: {
    users: async (_, __, ctx) => {
      if (!ctx.authUser) throw new GraphQLError(ErrorMessages.UNAUTHORIZED);
      return await ctx.users.find();
    },
    getUser: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError(ErrorMessages.UNAUTHORIZED);

      const user = await ctx.users.findById(args.id).populate("cart");

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

      const cart = new ctx.carts({ owner: newUser.id, total: 0 });
      await cart.save();

      if (!!user.length) {
        throw new GraphQLError(`Email: ${args.data!.email} already in use`);
      }

      newUser.cart = cart._id;
      const userCreated = await newUser.save();
      const populatedUser = await ctx.users
        .findById(userCreated._id)
        .populate("cart");

      return populatedUser;
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
