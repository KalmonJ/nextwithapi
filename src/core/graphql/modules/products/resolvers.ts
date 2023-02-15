import Products from "core/models/Products";

export const productResolvers = {
  Query: {
    products: async () => await Products.find(),
    getProduct: async (_: any, args: any) => {
      const product = await Products.findById(args.id);
      console.log(_, "???");
      return product;
    },
  },

  Mutation: {
    createProduct: (_: any, args: any) => {
      const product = new Products(args.data);
      product.save();
      return product;
    },
  },
};
