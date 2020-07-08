const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const queryType = require('./queries/phone').queryType;
const mutation = require('./mutations/index');

exports.phoneSchema = new GraphQLSchema({
   query: queryType,
   mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: mutation
   })
})