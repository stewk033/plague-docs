const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const PORT = process.env.PORT || 3001;

// const { graphqlHTTP } = require("express-graphql");
const { typeDefs, resolvers } = require("./server/Schema/index.js");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/plague-docs",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
