import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
console.log('accessToken',accessToken)
const client = new ApolloClient({
  uri: "https://fbi-api.dbc.dk/default/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>

  );
}

export default MyApp;
