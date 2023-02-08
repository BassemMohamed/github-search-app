import { gql } from "@apollo/client";

const SEARCH_REPOS_QUERY = gql`
  query ($query: String!) {
    search(query: $query, type: REPOSITORY, first: 50) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            url
            name
            description
            owner {
              login
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export default SEARCH_REPOS_QUERY;
