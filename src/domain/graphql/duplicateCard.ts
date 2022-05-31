import {gql} from '@apollo/client';

export const DUPLICATE_CARD = gql`
  mutation DuplicateCard($id: String!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;
