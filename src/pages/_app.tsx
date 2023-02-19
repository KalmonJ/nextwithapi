import { client } from "libs/wagmi";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
}
