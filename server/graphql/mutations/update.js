const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const phoneType = require('../types/phone').phoneType;
const services = require('../../services');

exports.update = {
   type: phoneType,
   args: {
      id: {
         type : new GraphQLNonNull(GraphQLID)
      },
      name : {
         type: new GraphQLNonNull(GraphQLString)
      },
      phone:{
         type: new GraphQLNonNull(GraphQLInt)
      },
   },
   resolve(root, params){
      return services.updateContact(params)
   }
}