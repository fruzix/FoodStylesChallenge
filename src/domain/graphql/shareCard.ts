import {gql} from '@apollo/client';

export const SHARE_CARD = gql`
  mutation ShareCard($id: String!) {
    shareCard($id)
  }
`;
