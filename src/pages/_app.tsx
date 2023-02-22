import { client } from "libs/wagmi";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "libs/apolloClient";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </WagmiConfig>
    </>
  );
}
