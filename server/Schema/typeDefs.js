const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Adult {
    _id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    phoneNumber: String
    birthDate: String
    createdAt: String
    updatedAt: String
  }

  type AdultVaxCard {
    _id: ID
    vaxType: String
    vaxDate: String
    facilityLocation: String
    lotNum: String
    certNum: String
    dose: String
    createdAt: String
    updatedAt: String
  }

  type Child {
    _id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    phoneNumber: String
    birthDate: String
    createdAt: String
    updatedAt: String
  }

  type ChildVaxCard {
    _id: ID
    vaxType: String
    vaxDate: String
    facilityLocation: String
    lotNum: String
    certNum: String
    dose: String
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: Adult
  }

  type Query {
    me: Adult
    users: [Adult]
    user(username: String!): Adult
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveVaxCard(vaxCardData: String!): AdultVaxCard
    removeVaxCard(vaxCardId: ID!): AdultVaxCard
  }
`;

module.exports = typeDefs;
