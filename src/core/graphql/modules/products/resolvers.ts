import {
  Product,
  ProductReview,
  Resolvers,
} from "__generated__/resolvers-types";
import { GraphQLError } from "graphql";
import mongoose from "mongoose";

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
    createReview: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");
      const review: mongoose.Document<ProductReview> = new ctx.reviews(
        args.data
      );
      await review.save();

      return (await ctx.reviews
        .findById(review.id)
        .populate("author")) as ProductReview;
    },

    deleteProduct: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");
      return !!(await ctx.products.findByIdAndRemove(args.id));
    },

    updateProduct: async (_, args, ctx) => {
      const updatedProduct = await ctx.products.findByIdAndUpdate(
        args.id,
        args.data
      );
      return updatedProduct;
    },

    createProduct: async (_, args, ctx) => {
      if (!ctx.authUser) throw new GraphQLError("Unauthorized");
      const product: mongoose.Document<Product> = new ctx.products(args.data);
      await product.save();

      console.log(product, "produto");

      return (await ctx.products
        .findById(product.id)
        .populate("reviews")
        .populate("publishedBy")) as Product;
    },
  },
};
