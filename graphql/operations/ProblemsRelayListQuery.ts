// This file exists solely for Relay Compiler to discover the operation.
// It is not imported by the app at runtime.
import { graphql } from "react-relay";

graphql`
  query ProblemsRelayListQuery($first: Int!) {
    problems(first: $first) {
      edges {
        node {
          id
          title
          difficulty
        }
      }
    }
  }
`;
