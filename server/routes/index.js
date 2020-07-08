var express = require('express');
var router = express.Router();
const firebase = require("firebase");


/* ROUTER FOR TESTING PURPOSE ONLY */

router.get('/', function (req, res, next) {
  const phoneReference = firebase.database().ref("/Phones/");
  phoneReference.on("value", function (snapshot) {
    if (!snapshot.val()) {
      console.log('Not yet data in database')
    }
    res.json(snapshot.val());
    phoneReference.off("value");
  }, function (errorObject) {
    console.log("Read data failed" + errorObject.code);
    res.send("Read data failed" + errorObject.code)
  });
});

router.post('/', function (req, res) {
  const id = new Date().getTime();
  const { name, phone } = req.body;
  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.set({ name: name, phone: phone }, function (error) {
    if (error) {
      res.send("Data could not be saved." + error)
    } else {
      res.send("Data saved successfully.");
    }
  });
});

router.put('/:id', function (req, res) {
  const { name, phone } = req.body;
  const id = req.params.id;

  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.update({ name: name, phone: phone }, function (error) {
    if (error) {
      res.send("Data could not be updated" + error)
    } else {
      res.send("Data updated successfully.");
    }
  });
});

router.delete('/:id', function (req, res) {
  const id = req.params.id;
  const referencePath = `/Phones/${id}/`;
  const phoneReference = firebase.database().ref(referencePath);
  phoneReference.remove(error => {
    if (error) {
      res.send('Data could not be deleted.' + error);
    } else {
      res.send('Data deleted successfully.');
    }
  })
}) 

router.post('/search', function (req, res) {
  const { name, phone } = req.body;
  const referencePath = `/Phones/`;
  const phoneReference = firebase.database().ref(referencePath);
 
  if (phone) {
    phoneReference.orderByChild("phone").equalTo(phone).on("value", function (snapshot) {
      if (!snapshot.val()) {
        console.log('there is no related data in database');
        return res.json([]);
      }
      res.json(snapshot.val());
    }, function (errorObject) {
      console.log("Search data failed" + errorObject.code);
      res.send("Search data failed" + errorObject.code)
    });
  } else if (name) {
    phoneReference.orderByChild("name").equalTo(name).on("value", function (snapshot) {
      if (!snapshot.val()) {
        console.log('there is no related data in database');
        return res.json([]);
      }
    }, function (errorObject) {
      console.log("Search data failed" + errorObject.code);
      res.send("Search data failed" + errorObject.code)
    });
  }
});



module.exports = router;
