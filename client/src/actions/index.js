import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3001/graphql/';
const client = new ApolloClient({
   uri: API_URL
});

// start load phones
export const loadContactsSuccess = (phones) => ({
   type: 'LOAD_CONTACT_SUCCESS',
   phones
})

export const loadContactsFailure = () => ({
   type: 'LOAD_CONTACT_FAILURE'
})

export const loadContacts = () => {
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
      })
         .then(function (response) {
            console.log(response);
            dispatch(loadContactsSuccess(response.data.phones))
         })
         .catch(function (error) {
            console.log(error);
            dispatch(loadContactsFailure())
         })
   }
}

