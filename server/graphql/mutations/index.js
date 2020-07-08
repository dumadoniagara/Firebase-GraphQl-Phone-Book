const addContact = require('./add').add;
const deleteContact = require('./delete').delete;
const updateContact = require('./update').update;

module.exports = {
   addContact,
   deleteContact,
   updateContact
}