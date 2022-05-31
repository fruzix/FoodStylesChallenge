import {ApolloClient, InMemoryCache} from '@apollo/client';

const authToken =
  'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMzLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0MDAxODUzLCJleHAiOjE2NTQ2MDY2NTN9.nGJ6pHjFlVcMYuZxwQ4gKqxcl2fjMULytIYBjGVtn57xHXkEL4isTSqUsXcTbaajhZTc_gtdoWmSjU5VUStcmmMiVj7P0uAOhSVc4WX-Xl8kn3MSkTvTOT1Ah4IIEFBB3IjKTt7GcH83awd43WnIZ8BpFYnDltFsAVPC-vPcwxpJD3BEbFBwQXcsI80lZlVKddQhJtCB_MGFz0XKCCR1sol-lxoBD69HguJF8QWhRA4K-Lg1bbCgkoikZyMNGVPQkdClgdLXLmBalcvikPgM9Ta7c76Hf390z8Pz9NO_9DI3c_3_hrhrsucpZdxzSQEGg8Xj14SMpZ1i-Pcdgf6Hgg';
const API = 'https://api-dev.foodstyles.com/graphql';

export const client = new ApolloClient({
  uri: API,
  headers: {Authorization: `${authToken}`},
  cache: new InMemoryCache(),
});
