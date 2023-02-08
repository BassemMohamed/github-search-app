import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 0.75rem;
  text-align: left;
  position: relative;
  border: 1px solid #555;
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 2.5rem;
    height: auto;
    border-radius: 50%;
  }

  h4 {
    cursor: pointer;
    margin-top: 0;
  }
`;

const CardContent = styled.div`
  p {
    margin: 0;
  }
`;

type CardProps = {
  title: string;
  url: string;
  description: string;
  author: { name: string; avatar: string };
};

/**
 * This component was built decoupled from any functional logic.
 * This way it can be moved later to a component library.
 */
export default function Card(props: CardProps) {
  const { title, url, description, author } = props;

  return (
    <StyledCard>
      <h4 onClick={() => window.open(url)}>{title}</h4>
      <p>{description}</p>
      <CardContent>
        <div>
          <img src={author.avatar} alt={author.name}></img>
          <p>{author.name}</p>
        </div>
      </CardContent>
    </StyledCard>
  );
}
