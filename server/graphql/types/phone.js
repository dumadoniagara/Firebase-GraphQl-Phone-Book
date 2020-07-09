const {
   GraphQLObjectType,
   GraphQLNonNull,
   GraphQLID,
   GraphQLString
} = require('graphql');

exports.phoneType = new GraphQLObjectType({
   name: 'phone',
   fields: function () {
      return {
         id: {
            type: new GraphQLNonNull(GraphQLID)
         },
         name: {
            type: GraphQLString
         },
         phone: {
            type: GraphQLString
         }
      }
   }
})