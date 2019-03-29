import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";
import "../css/Home.css";

class Home extends Component {
  state = {
    query: "forest",
    photoList: [],
    backgroundImage: "../assets/photo1.jpg"
  };

  componentDidMount() {
    const { cookies } = this.props;

    var string = cookies.get("queries");

    console.log(string);

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
      .then(json => {
        this.setState({
          photoList: json,
          backgroundImage: json.results[3].urls.full
        });
      });
  }

  render() {
    return (
      <div
        className="containerHome"
        style={{
          backgroundImage: "url(" + this.state.backgroundImage + ")"
        }}
      >
        <div id="background" />
        <h1 id="titleMain">good morning, ace.</h1>
        <h1 id="photographer">photographer</h1>
        <p id="nameOfPhotographer">Alexandru Acea</p>
      </div>
    );
  }
}

export default Home;
