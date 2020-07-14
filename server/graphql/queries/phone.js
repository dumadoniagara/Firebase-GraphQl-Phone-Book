const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
var services = require('../../services');
var phoneType = require('../types/phone').phoneType;
const PaginationArgType = require('../types/paginationParam');
const PaginatedListType = require('../types/paginationOutput');

exports.queryType = new GraphQLObjectType({
   name: 'Query',
   fields: function () {
      return {
         phones: {
            type: PaginatedListType(phoneType),
            args: {
               pagination: {
                  type: PaginationArgType,
                  defaultValue: { offset: 0, limit: 5 }
               }
            },
            resolve: (root, params) => {
               const { offset, limit } = params.pagination
               return {
                  items: services.getContacts().slice(offset, limit),
                  count: Math.ceil(services.getContacts().length / limit)
               }
            }
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