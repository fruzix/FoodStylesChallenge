import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API, AUTH_TOKEN} from '@App/constants';

export const client = new ApolloClient({
  uri: API,
  headers: {Authorization: `${AUTH_TOKEN}`},
  cache: new InMemoryCache(),
});
