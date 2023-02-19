import typeDefs from "core/graphql/modules/typeDefs";
import resolvers from "core/graphql/modules/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { dbConnection } from "core/config/dbConnect";
import Users from "core/models/Users";
import Products from "core/models/Products";

export type Context = {
  users: typeof Users;
  products: typeof Products;
};

const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

dbConnection.then(() => {
  console.log("🚀 database connection successful");
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async () => {
    return { users: Users, products: Products };
  },
});
