import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';

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

export const loadContacts = (offset = 0, limit = 5) => {

   const phonesQuery = gql`
   query{
      phones(pagination:{offset: ${offset}, limit:${limit}}){
         count
         items{
            id
            name
            phone
         }
      }
   }`;
   return dispatch => {
      return client.query({
         query: phonesQuery
      })
         .then(function (response) {
            dispatch(loadContactsSuccess(response.data.phones))
         })
         .catch(function (error) {
            console.log(error);
            dispatch(loadContactsFailure())
         })
   }
}


export const searchContacts = (name, phone, offset = 0, limit = 5) => {
   console.log(name, phone, offset, limit);
   const searchQuery = gql`
   query 
      phones(
         $name : String!, 
         $phone: String!
         $offset : Int!
         $limit : Int!
      ){
         phones(
         name : $name,
         phone: $phone,
         pagination : {
            offset : $offset,
            limit : $limit
         }
         ){
         count
         items{
            id
            name
            phone
         }
      }
   }`;
   return dispatch => {
      return client.query({
         query: searchQuery,
         variables: {
            name,
            phone,
            offset,
            limit
         }
      })
         .then(function (response) {
            console.log(response.data.phones)
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
const postContactSuccess = (contact) => ({
   type: 'POST_CONTACT_SUCCESS',
   contact
})

const postContactFailure = (id) => ({
   type: 'POST_CONTACT_FAILURE',
   id
})

const postContactRedux = (id, name, phone) => ({
   type: 'POST_CONTACT',
   id, name, phone
})

export const postContact = (name, phone) => {
   const id = new Date().getTime();
   const addQuery = gql`
        mutation addContact($id: ID!, $name: String!, $phone: String!) {
            addContact(id: $id, name: $name, phone: $phone) {
                id
                name
                phone
            }
        }`;

   return dispatch => {
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
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Contact added successfully!',
               showConfirmButton: false,
               timer: 1200
            })
            dispatch(postContactSuccess(response.data.addContact))
         })
         .catch(function (error) {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Something went wrong! check your connection',
               showConfirmButton: true
            })
            dispatch(postContactFailure(id))
         })
   }

}
// post contact end

// Resend start
export const resendContact = (id, name, phone) => {
   const addQuery = gql`
        mutation addContact($id: ID!, $name: String!, $phone: String!) {
            addContact(id: $id, name: $name, phone: $phone) {
                id
                name
                phone
            }
        }`;
   return dispatch => {
      return client.mutate({
         mutation: addQuery,
         variables: {
            id,
            name,
            phone
         }
      })
         .then(function (response) {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Contact added successfully!',
               showConfirmButton: false,
               timer: 1000
            })
            dispatch(postContactSuccess(response.data.addContact))
         })
         .catch(function (error) {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Something went wrong! check your connection',
               showConfirmButton: true
            })
            dispatch(postContactFailure(id))
         })
   }
}
// Resend end


// Delete Contact Start
export const deleteContactRedux = (id) => ({
   type: 'DELETE_CONTACT', id
})

const deleteContactSuccess = (id) => ({
   type: 'DELETE_CONTACT_SUCCESS', id
})

const deleteContactFailure = () => ({
   type: 'DELETE_CONTACT_FAILURE'
})

export const deleteContact = (id) => {
   const deleteQuery = gql`
   mutation deleteContact($id: ID!){
      deleteContact(id: $id){
         id
      }
   }`;
   return dispatch => {
      Swal.fire({
         icon: 'warning',
         title: "Are you sure delete this contact?",
         text: "You can't revert this action",
         type: "warning",
         showCancelButton: true,
         confirmButtonText: "Yes Delete it!",
         cancelButtonText: "No, Keep it!",
         showCloseButton: true,
         showLoaderOnConfirm: true
      }).then(result => {
         if (result.value) {
            dispatch(deleteContactRedux(id));
            return client.mutate({
               mutation: deleteQuery,
               variables: {
                  id
               }
            })
               .then(function (response) {
                  dispatch(deleteContactSuccess(response))
               })
               .catch(function (error) {
                  dispatch(deleteContactFailure())

               })
         }
      })
   }
}
// Delete Contact End

// Edit Contact-Start
export const onUpdateContact = (id) => ({
   type: 'ON_UPDATE_CONTACT',
   id
})

export const offUpdateContact = (id) => ({
   type: 'OFF_UPDATE_CONTACT',
   id
})

const updateContactSuccess = (contact) => ({
   type: 'UPDATE_CONTACT_SUCCESS',
   contact
})

const updateContactFailure = (id) => ({
   type: 'UPDATE_CONTACT_FAILURE',
   id
})

const updateContactRedux = (id, name, phone) => ({
   type: 'UPDATE_CONTACT',
   id, name, phone
})

export const updateContact = (id, name, phone) => {
   return dispatch => {
      dispatch(updateContactRedux(id, name, phone));
      const updateQuery = gql`
   mutation updateContact($id: ID!, $name: String!, $phone: String!) {
     updateContact(id: $id, name: $name, phone: $phone ) {
       id
       name
       phone
     }
   }
 `;

      return client.mutate({
         mutation: updateQuery,
         variables: {
            id,
            name,
            phone
         }
      })
         .then(function (response) {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Contact updated successfully!',
               showConfirmButton: false,
               timer: 1200
            })
            dispatch(updateContactSuccess(response.data.updateContact))
         })
         .catch(function (error) {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Something went wrong! check your connection',
               showConfirmButton: true
            })
            dispatch(updateContactFailure(id))
         })
   }
}
// Edit contact-end

// Pagination actions start
export const nextPage = () => ({
   type: 'NEXT_PAGE'
})

export const changePage = (page) => ({
   type: 'CHANGE_PAGE',
   page
})

export const previousPage = () => ({
   type: 'PREVIOUS_PAGE'
})
// pagination actions end


// On search 
export const onSearch = (filter) => ({
   type: 'ON_SEARCH',
   filter
})
