import { ApolloError, useLazyQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import SEARCH_REPOS_QUERY from "../queries/searchRepo";
import { Header } from "./";
import RepoGrid from "./RepoGrid";

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

  const response = data?.search.edges;

  return (
    <StyledRepoFinder>
      {/* Header */}
      <Header onSubmit={(query) => getRepos({ variables: { query } })}></Header>

      {/* Main content */}
      <div>
        {loading && <Loading />}
        {error && <Error error={error} />}

        {/* Search output */}
        {response && (
          <RepoGrid repos={response.map((item: any) => item.node)} />
        )}

        {/* No search query */}
        {!loading && !response && (
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
