const { GraphQLObjectType, GraphQLList } = require('graphql');
var services = require('../../services');
var phoneType = require('../types/phone').phoneType;

exports.queryType = new GraphQLObjectType({
   name: 'Query',
   field: function () {
      return {
         phones: {
            type: new GraphQLList(phoneType),
            resolve: services.getContacts
         }
      }
   }
});