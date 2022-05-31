import {gql} from '@apollo/client';

export const CARDS_QUERY = gql`
  query {
    cards {
      id
      name
    }
  }
`;
