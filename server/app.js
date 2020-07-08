var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require('firebase');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const phoneSchema = require('./graphql').phoneSchema;


const config = {
   apiKey: "AIzaSyAQ2LupBDTNjmE83MtgBwKFD3dbgderA3U",
   authDomain: "phonebook-6bf80.firebaseapp.com",
   databaseURL: "https://phonebook-6bf80.firebaseio.com",
   projectId: "phonebook-6bf80",
   storageBucket: "phonebook-6bf80.appspot.com",
   messagingSenderId: "956103239103"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/graphql', cors(), graphqlHTTP({
   schema: phoneSchema,
   rootValue: global,
   graphiql: true
}))

module.exports = app;
