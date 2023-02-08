import React from "react";
import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RepoFinder from "./components/repoFinder/RepoFinder";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || ""; // <-- TODO: place your token here or in a .env file

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
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
