import {gql} from '@apollo/client';

export const ADD_CARD = gql`
  mutation {
    createCard(
      data: {
        name: "New card"
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;
