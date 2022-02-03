const express = require("express");
const mongoose = require("mongoose");
// const { ApolloServer } = require("apollo-server-express");

const app = express();
const PORT = process.env.PORT || 3001;

const { graphqlHTTP } = require("express-graphql");
const db = require("./config/connection");
const schema = require("./server/Schema/index.js");
// const { authMiddleware } = require("./utils/auth");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// startServer();

app.use(require("./routes"));

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});
