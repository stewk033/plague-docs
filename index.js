const express = require("express");
const app = express();
const PORT = 3001;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/index.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});