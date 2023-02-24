import { Resolvers } from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";

export const productResolvers: Resolvers = {
  Query: {
    products: async (_, __, ctx) =>
      await ctx.products.find().populate("publishedBy"),
    getProduct: async (_, args, ctx) => {
      const product = await ctx.products.findById(args.id);
      return product;
    },
  },

  Mutation: {
    createProduct: (_, args, ctx) => {
      if (ctx.authUser) throw new GraphQLError("Unauthorized");
      const product = new ctx.products(args.data);
      product.save();
      return product;
    },
  },
};
