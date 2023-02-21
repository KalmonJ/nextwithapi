import { Resolvers } from "__generated__/resolvers-types";

export const productResolvers: Resolvers = {
  Query: {
    products: async (_, __, ctx) => await ctx.products.find(),
    getProduct: async (_, args, ctx) => {
      const product = await ctx.products.findById(args.id);
      return product;
    },
  },

  Mutation: {
    createProduct: (_, args, ctx) => {
      const product = new ctx.products(args.data);
      product.save();
      return product;
    },
  },
};
