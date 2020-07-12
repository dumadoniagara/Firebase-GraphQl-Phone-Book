// const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
// var services = require('../../services');
// var phoneType = require('../types/phone').phoneType;

// exports.searchType = new GraphQLObjectType({
//    name: 'QuerySearch',
//    fields: function () {
//       return {
//          name: { type: GraphQLString },
//          phone: { type: GraphQLString },
//          phones: {
//             type: new GraphQLList(phoneType),
//             resolve(root, params) {
//                return services.searchContacts(params)
//             }
//          }
//       }
//    }
// });