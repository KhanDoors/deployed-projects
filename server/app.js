const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mlab/deployedprojects", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on port ${PORT}`));
