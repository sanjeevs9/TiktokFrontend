import { ApolloClient, InMemoryCache } from "@apollo/client";

export function initializeApollo() {
  return new ApolloClient({
    uri: "https://my-app.sanjeevshankar1234-as36.workers.dev/graphql",
    cache: new InMemoryCache(),
  });
}