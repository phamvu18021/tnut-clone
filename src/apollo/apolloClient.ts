import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://nologin.tnut.vn/graphql", // Đổi URL GraphQL endpoint của bạn
  cache: new InMemoryCache()
});

export default client;
