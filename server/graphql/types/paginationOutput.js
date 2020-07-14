const { GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');

const PaginatedListType = (ItemType) => new GraphQLObjectType({
   name: `paginated ${ItemType}`,
   fields: {
      count: { type: GraphQLInt },
      items: { type: new GraphQLList(ItemType) }
   }
})

module.exports = PaginatedListType;