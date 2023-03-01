import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { dbConnection } from "core/config/dbConnect";
import { getSession } from "core/graphql/modules/auth/resolvers";
import { NextApiResponse } from "next";
import typeDefs from "core/graphql/modules/typeDefs";
import resolvers from "core/graphql/modules/resolvers";
import Users from "core/models/Users";
import Products from "core/models/Products";
import Reviews from "core/models/Reviews";
import Carts from "core/models/Carts";
import { GraphQLError } from "graphql";

export type Context = {
  users: typeof Users;
  products: typeof Products;
  reviews: typeof Reviews;
  carts: typeof Carts;
  authUser?: any;
  res: NextApiResponse;
};

const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
});

dbConnection.then(() => {
  console.log("🚀 database connection successful");
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const token: string = req.headers.authorization || "";

    try {
      const { data } = getSession(token);

      return {
        users: Users,
        products: Products,
        authUser: data,
        reviews: Reviews,
        carts: Carts,
        res,
      };
    } catch (error) {
      return {
        users: Users,
        products: Products,
        res,
        reviews: Reviews,
        carts: Carts,
      };
    }
  },
});
