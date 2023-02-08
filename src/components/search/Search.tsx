import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
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

  input[type="submit"] {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

type SearchProps = {
  onSubmit: (query: string) => void;
};

export default function Search(props: SearchProps) {
  const { onSubmit } = props;
  const [query, setQuery] = useState<string>("");

  return (
    <Header>
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
          type="submit"
          value="Search"
          disabled={!query}
          onClick={() => onSubmit(query)}
        />
      </Form>
    </Header>
  );
}
