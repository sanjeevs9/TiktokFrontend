import { ApolloClient, InMemoryCache } from "@apollo/client";

export function initializeApollo() {
  return new ApolloClient({
    uri: "http://127.0.0.1:8787/graphql",
    cache: new InMemoryCache(),
  });
}