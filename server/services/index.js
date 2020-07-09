const firebase = require('firebase');

const getContacts = () => {
   const phoneReference = firebase.database().ref("/Phones/");
   return new Promise((resolve, reject) => {
      phoneReference.on("value", function (snapshot) {
         const folders = snapshot.val();
         if (snapshot.val() === null) {
            resolve([]);
         } else {
            const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]))
            resolve(data);
         }
         phoneReference.off("value");
      }, function (errorObject) {
         console.log("Read data failed" + errorObject.code);
         reject("Read data failed" + errorObject.code)
      });
   })
}

const createContact = (contact) => {
   const referencePath = `/Phones/${contact.id}/`;
   const phoneReference = firebase.database().ref(referencePath);
   return new Promise((resolve, reject) => {
      phoneReference.set({ name: contact.name, phone: contact.phone }, function (error) {
         if (error) {
            reject("Data could not be saved." + error)
         } else {
            resolve(contact);
         }
      });
   });
}

const updateContact = (contact) => {
   var referencePath = `/Phones/${contact.id}/`;
   var phoneReference = firebase.database().ref(referencePath);
   return new Promise((resolve, reject) => {
      phoneReference.update({ name: contact.name, phone: contact.phone }, function (error) {
         if (error) {
            reject("Data could not be updated" + error)
         } else {
            resolve(contact);
         }
      });
   })
}

const deleteContact = (contact) => {
   var referencePath = `/Phones/${contact.id}/`;
   var phoneReference = firebase.database().ref(referencePath);
   return (new Promise((resolve, reject) => {
      phoneReference.remove((error) => {
         if (error) {
            reject("Data could not be deleted." + error);
         } else {
            resolve(contact);
         }
      })
   }));
}

const searchContact = (contact) => {

}

module.exports = {getContacts, createContact, updateContact, deleteContact}