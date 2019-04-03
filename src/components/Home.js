import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";
import "../css/Home.css";
import gearIcon from "../assets/gear.svg";
import Settings from "./Settings";

const cookies = new Cookies();

class Home extends Component {
  state = {
    query: "",
    photoList: [],
    backgroundImage: "../assets/photo1.jpg",
    photographer: "",
    link: "",
    showSettings: false
  };

  componentDidMount() {
    if (typeof cookies.get("queries") === "undefined")
      this.props.history.push("/onboarding");
    else this.getPicturesFromAPI(cookies.get("queries"));
  }

  getPicturesFromAPI(query) {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ID}&query=${query}`,
      { method: "get" }
    ).then(res =>
      res.json().then(json => {
        const data = json.results[2];

        this.setState({
          photoList: json,
          backgroundImage: data.urls.full,
          photographer: data.user.name,
          link: data.user.links.html
        });
      })
    );
  }

  handleSettingsClick() {
    const { showSettings } = this.state;

    if (!showSettings) {
      this.setState({ showSettings: !showSettings });
    } else this.setState({ showSettings: !showSettings });
  }

  render() {
    const { showSettings } = this.state;
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

        <Settings photoList={this.state.photoList} show={showSettings} />

        <h1 id="titleMain">good morning, ace.</h1>

        <div className="bottomLeft">
          <h1 id="photographer">photographer</h1>
          <a href={this.state.link}>
            <p id="nameOfPhotographer">{this.state.photographer}</p>
          </a>
        </div>
        <img
          src={gearIcon}
          id="gear"
          alt="settings"
          onClick={this.handleSettingsClick.bind(this)}
        />
      </div>
    );
  }
}

export default withRouter(Home);
