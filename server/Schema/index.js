const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../MOCK_DATA.json");

const AdultCardType = require("./server/Schema/typeDefs/AdultCardType.js");
const ChildCardType = require("./server/Schema/typeDefs/ChildCardType.js");
const AdultUser = require("./server/Schema/typeDefs/AdultUser.js");
const ChildUser = require("./server/Schema/typeDefs/ChildUser.js");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllAdults: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        gender: {type: GraphQLString},
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        birthDate: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
