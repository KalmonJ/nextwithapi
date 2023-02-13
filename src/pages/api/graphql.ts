import typeDefs from "core/graphql/modules/typeDefs";
import resolvers from "core/graphql/modules/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { dbConnection } from "core/config/dbConnect";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

dbConnection.then(() => {
  console.log("🚀 database connection successful");
});

export default startServerAndCreateNextHandler(apolloServer);
