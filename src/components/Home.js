import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";
import "../css/Home.css";

class Home extends Component {
  state = {
    query: "apple",
    photoList: [],
    backgroundImage: "../assets/photo1.jpg",
    photographer: "",
    link: ""
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
        console.log(json.results);
        this.setState({
          photoList: json,
          backgroundImage: json.results[2].urls.full,
          photographer: json.results[2].user.name,
          link: json.results[2].user.links.html
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

        <h1 id="quote">
          "The only way to do great work is to love what you do."
        </h1>

        <h1 id="titleMain">good morning, ace.</h1>
        <h1 id="photographer">photographer</h1>

        <a href={this.state.link}>
          <p id="nameOfPhotographer">{this.state.photographer}</p>
        </a>
      </div>
    );
  }
}

export default Home;
