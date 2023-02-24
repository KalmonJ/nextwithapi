import { Resolvers } from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";

export const productResolvers: Resolvers = {
  Query: {
    products: async (_, __, ctx) =>
      await ctx.products.find().populate("publishedBy").populate("reviews"),
    getProduct: async (_, args, ctx) => {
      const product = await ctx.products.findById(args.id);
      return product;
    },
  },

  Mutation: {
    createReview: (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");

      const review = new ctx.reviews(args.data);
      review.save();
      return review;
    },

    deleteProduct: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");
      return !!ctx.products.findByIdAndRemove(args.id);
    },

    updateProduct: async (_, args, ctx) => {
      const updatedProduct = await ctx.products.findByIdAndUpdate(
        args.id,
        args.data
      );
      return updatedProduct;
    },

    createProduct: (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");
      const product = new ctx.products(args.data);
      product.save();
      return product;
    },
  },
};
