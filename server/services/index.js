const firebase = require('firebase');

const getUsers = () => {
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
         res.send("Read data failed" + errorObject.code)
      });
   })
}