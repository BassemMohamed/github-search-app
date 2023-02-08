import React from "react";
import styled from "styled-components";
import { Repo } from "../models/Repo";
import { Card } from "./";

const StyledRepoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
`;

type RepoGridProps = {
  repos: Repo[];
};

export default function RepoGrid(props: RepoGridProps) {
  const { repos } = props;

  return (
    <StyledRepoGrid>
      {repos &&
        repos.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            url={repo.url}
            author={{ name: repo.owner.login, avatar: repo.owner.avatarUrl }}
          ></Card>
        ))}
    </StyledRepoGrid>
  );
}
