import {gql} from '@apollo/client';

export const DELETE_CARD = gql`
  mutation DeleteCard($id: String!) {
    deleteCard($id)
  }
`;
