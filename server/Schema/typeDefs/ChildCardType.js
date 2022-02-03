const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const ChildCardType = new GraphQLObjectType({
  name: "ChildVaxCard",
  fields: () => ({
    id: { type: GraphQLInt },
    vaxType: { type: GraphQLString },
    vaxDate: { type: GraphQLString },
    facilityLocation: { type: GraphQLString },
    lotNum: { type: GraphQLString },
    certNum: { type: GraphQLString },
    dose: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = ChildCardType;
