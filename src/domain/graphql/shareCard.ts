import {gql} from '@apollo/client';

export const SHARE_CARD = gql`
  mutation ShareCard($id: ID!) {
    shareCard(id: $id)
  }
`;
