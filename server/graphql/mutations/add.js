const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const phoneType = require('../types/phone').phoneType;
const services = require('../../services');
const { param } = require('../../routes');

exports.add = {
   type: phoneType,
   args: {
      id: {
         type: GraphQLID
      },
      name: {
         type: new GraphQLNonNull(GraphQLString),
      },
      phone: {
         type: new GraphQLNonNull(GraphQLString),
      }
   },
   resolve(root, params) {
      return services.createContact(params);
   }
}