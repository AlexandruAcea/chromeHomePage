import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";
import "../css/Home.css";

class Home extends Component {
  state = {
    query: "woods"
  };

  componentWillMount() {
    this.getPicturesFromAPI();
  }

  getPicturesFromAPI() {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ID}&query=${
        this.state.query
      }`,
      { method: "get" }
    )
      .then(res => res.json())
      .then(res => console.log("works!", res))
      .catch(res => console.log("error", res));
  }

  render() {
    return (
      <div className="containerHome">
        <div id="background" />
        <h1 id="titleMain">good morning, ace.</h1>
        <h1 id="photographer">photographer</h1>
        <p id="nameOfPhotographer">Alexandru Acea</p>
      </div>
    );
  }
}

export default Home;
