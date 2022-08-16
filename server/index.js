const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

const connectDB = require("./config/db");
connectDB();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(
  port,
  console.log(`Backend server is running at http://localhost:${port}`)
);
