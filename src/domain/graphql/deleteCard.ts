import {gql} from '@apollo/client';

export const DELETE_CARD = gql`
  mutation ($id: ID!) {
    deleteCard(id: $id)
  }
`;
