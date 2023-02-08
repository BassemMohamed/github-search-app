import React from "react";
import styled from "styled-components";
import Search from "../search/Search";

const StyledRepoFinder = styled.div`
  > article {
    padding: 0 0.5rem;
    margin: 0.5rem 0;
  }
`;

export default function RepoFinder() {
  return (
    <StyledRepoFinder>
      <Search onSubmit={(query) => {}}></Search>
    </StyledRepoFinder>
  );
}
