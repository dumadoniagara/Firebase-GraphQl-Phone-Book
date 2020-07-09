import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3001/graphql/';
const client = new ApolloClient({
   uri: API_URL
});

// start load phones
export const loadPhonesSuccess = (phones) => ({
   type: 'LOAD_COMMENT_SUCCESS',
   phones
})

export const loadPhonesFailure = () => ({
   type: 'LOAD_COMMENT_FAILURE'
})

export const loadPhones = () => {
   const phonesQuery = gql`
   query {
      phones{
         id
         name
         phone
      }
    }`;
   return dispatch => {
      return client.query({
         query: phonesQuery
      }).then(function(response){
         console.log(response);
         dispatch(loadPhonesSuccess(response.data.phones))
      })
      .catch(function(error){
         console.log(error);
         dispatch(loadPhonesFailure())
      })
   }
}

