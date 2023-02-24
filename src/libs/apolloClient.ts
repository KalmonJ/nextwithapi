import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: offsetLimitPagination(),
        },
      },
    },
  }),
});
