const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use("/graphql", graphqlHTTP({}));

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on port ${PORT}`));
