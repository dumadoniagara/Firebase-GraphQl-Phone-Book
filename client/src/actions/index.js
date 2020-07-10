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

// load end

// Post contact start
export const postContactSuccess = (contact) => ({
   type: 'POST_CONTACT_SUCCESS',
   contact
})

export const postContactFailure = (id) => ({
   type: 'POST_CONTACT_FAILURE',
   id
})

export const postContactRedux = (id, name, phone) => ({
   type: 'POST_CONTACT',
   id, name, phone
})

export const postContact = (name, phone) => {

   const addQuery = gql`
        mutation addContact($id: ID!, $name: String!, $phone: String!) {
            addContact(id: $id, name: $name, phone: $phone) {
                id
                name
                phone
            }
        }`;

   return dispatch => {
      const id = new Date().getTime();
      dispatch(postContactRedux(id, name, phone));

      return client.mutate({
         mutation: addQuery,
         variables: {
            id,
            name,
            phone
         }
      })
         .then(function (response) {
            console.log('berhasil then', response.data.addContact)
            dispatch(postContactSuccess(response.data.addContact))
         })
         .catch(function (error) {
            console.log('gagal catch', error)
            dispatch(postContactFailure(id))
         })
   }

}


// post contact end

// Delete Contact Start
const deleteContactRedux = (id) => ({
   type: 'DELETE_CONTACT', id
})

export const deleteContactSuccess = (id) => ({
   type: 'DELETE_CONTACT_SUCCESS', id
})

export const deleteContactFailure = () => ({
   type: 'DELETE_CONTACT_FAILURE'
})

export const deleteContact = (id) => {
   console.log(id)
   const deleteQuery = gql`
   mutation deleteContact($id: ID!){
      deleteContact(id: $id){
         id
      }
   }`;
   return dispatch =>{
      dispatch(deleteContactRedux(id));

      return client.mutate({
         mutation : deleteQuery,
         variables : {
            id
         }
      })
      .then(function(response){
         dispatch(deleteContactSuccess(response))
      })
      .catch(function(error){
         console.log('error mutate delete', error);
         dispatch(deleteContactFailure())
      })
   }
}


// Delete Contact End
