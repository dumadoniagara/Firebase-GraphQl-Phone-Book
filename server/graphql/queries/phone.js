const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
var services = require('../../services');
var phoneType = require('../types/phone').phoneType;

exports.queryType = new GraphQLObjectType({
   name: 'Query',
   fields: function () {
      return {
         phones: {
            type: new GraphQLList(phoneType),
            resolve: services.getContacts
         },
         searchPhones: {
            type: new GraphQLList(phoneType),
            args: {
               name: { type: GraphQLString },
               phone: { type: GraphQLString }
            },
            resolve(root, params) {
               return services.searchContacts(params)
            }
         }
      }
   }
});