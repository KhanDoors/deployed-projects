import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../components/queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>output book details</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
