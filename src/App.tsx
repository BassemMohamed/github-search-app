import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { RepoFinder } from "./components";

const GITHUB_URL = "https://api.github.com/graphql";
// TODO: place your token here or in a .env file
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || "";

const client = new ApolloClient({
  link: new HttpLink({
    uri: GITHUB_URL,
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RepoFinder></RepoFinder>
    </ApolloProvider>
  );
}
