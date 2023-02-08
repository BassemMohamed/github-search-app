import { ApolloError, useQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import SEARCH_REPOS_QUERY from "../../queries/searchRepo";
import Header from "../header/Header";

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
  const [query, setQuery] = useState<string>("");
  const { loading, error, data } = useQuery(SEARCH_REPOS_QUERY, {
    variables: { query },
  });

  const reposLoaded = query && data && !loading;
  const repos = data?.search.edges;

  return (
    <StyledRepoFinder>
      {/* Header */}
      <Header onSubmit={(query) => setQuery(query)}></Header>

      {/* Main */}
      <div>
        {loading && <Loading />}
        {error && <Error error={error} />}

        {/* Search output */}
        {reposLoaded && repos.map((item: any) => item.node.name)}

        {/* No search query */}
        {!reposLoaded && (
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
