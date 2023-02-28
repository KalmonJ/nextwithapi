import mongoose from "mongoose";
import { Cart, Resolvers } from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";

export const cartResolvers: Resolvers = {
  Mutation: {
    createCart: async (_, args, ctx) => {
      const { carts } = ctx;
      const { data } = args;

      const cart: mongoose.Document<Cart> = new carts(data);

      if (!("product" in cart) || !("owner" in cart)) {
        throw new GraphQLError("Product and owner is required");
      }

      return await (await cart.save()).populate("product owner");
    },
  },
};
