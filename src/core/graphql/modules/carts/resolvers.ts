import mongoose from "mongoose";
import { Cart, Resolvers } from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";

export const cartResolvers: Resolvers = {
  Query: {
    getCart: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError(ErrorMessages.UNAUTHORIZED);
      const cart = await ctx.carts.findById(args.id);

      if (!cart) throw new GraphQLError(ErrorMessages.CARTNOTFOUND);

      return cart;
    },
  },

  Mutation: {
    createCart: async (_, args, ctx) => {
      const cart: mongoose.Document<Cart> = new ctx.carts(args.data);

      if (!("product" in cart) || !("owner" in cart)) {
        throw new GraphQLError(ErrorMessages.CART);
      }
      return await (await cart.save()).populate("product owner");
    },
  },
};

export enum ErrorMessages {
  UNAUTHORIZED = "Unauthorized!",
  CART = "Product and owner is required!",
  CARTNOTFOUND = "Cart not found!",
  USERNOTFOUND = "User not found!",
}
