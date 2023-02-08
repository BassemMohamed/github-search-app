import { ApolloError, useLazyQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import SEARCH_REPOS_QUERY from "../queries/searchRepo";
import { Header } from "./";

const StyledRepoFinder = styled.div`
  > div {
    padding: 1rem 1.5rem;
  }
`;

const Loading = () => (
  <p>
    Loading{" "}
    <span role="img" aria-label="emoji">
      ⏱⏱
    </span>
    ...
  </p>
);

const Error = ({ error }: { error: ApolloError }) => (
  <p>
    Error{" "}
    <span role="img" aria-label="emoji">
      😞
    </span>
    {error.toString()}
  </p>
);

export default function RepoFinder() {
  const [getRepos, { loading, error, data }] = useLazyQuery(SEARCH_REPOS_QUERY);

  const repos = data?.search.edges;

  return (
    <StyledRepoFinder>
      {/* Header */}
      <Header onSubmit={(query) => getRepos({ variables: { query } })}></Header>

      {/* Main */}
      <div>
        {loading && <Loading />}
        {error && <Error error={error} />}

        {/* Search output */}
        {repos && repos.map((item: any) => item.node.name)}

        {/* No search query */}
        {!loading && !repos && (
          <p>
            Start by searching for a github repository. For example, Try
            "Arabic-English-Subtitling"{" "}
            <span role="img" aria-label="emoji">
              😊
            </span>
          </p>
        )}
      </div>
    </StyledRepoFinder>
  );
}
