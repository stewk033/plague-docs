import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      firstName
      lastName
      gender
      email
      phoneNumber
      birthDate
      createdAt
      updatedAt: 
    }
  }
`;

export const SAVE_VAX_CARD = gql`
  mutation saveVaxCard($vaxCardData: VaxCardInput!) {
    saveVaxCard(vaxCardData: $vaxCardData) {
        _id
        vaxType
        vaxDate
        facilityLocation
        lotNum
        certNum
        dose
        createdAt
        updatedAt
      
    }
  }
`;

export const REMOVE_VAX_CARD = gql`
  mutation removeVaxCard($userId: ID!) {
    removeVaxCard(userId: $userId) {
        _id
        vaxType
        vaxDate
        facilityLocation
        lotNum
        certNum
        dose
        createdAt
        updatedAt
      
    }
  }
`;