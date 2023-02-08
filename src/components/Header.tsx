import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #3c3c3c;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #40ef40;
    vertical-align: middle;
  }

  a {
    margin-top: 0.5rem;
    text-decoration: none;
    color: #4183c4;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    padding: 0.25rem 0.5rem;
    appearance: none;
    border-radius: 10px;
    border: 1px solid #40ef40;
  }

  input[type="button"] {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

type HeaderProps = {
  onSubmit: (query: string) => void;
};

/**
 * This component was built decoupled from any functional logic.
 * This way it can be moved later to a component library.
 */
export default function Header(props: HeaderProps) {
  const { onSubmit } = props;
  const [query, setQuery] = useState<string>("");

  return (
    <StyledHeader>
      <div>
        <h3>Github repositories</h3>
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BassemMohamed"
          >
            Built by Bassem{" "}
            <span role="img" aria-label="emoji">
              ❤️
            </span>
          </a>
        </span>
      </div>

      <Form>
        <input
          type="text"
          value={query}
          placeholder="Name of Repository"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />

        <input
          type="button"
          value="Search"
          disabled={!query}
          onClick={() => onSubmit(query)}
        />
      </Form>
    </StyledHeader>
  );
}
