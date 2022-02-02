const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = UserType;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
    pages: Int
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
  }
`;

module.exports = typeDefs;
