import Context from "./Context";
import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";

class AppProvider extends Component {
  state = { photoList: [] };

  componentDidMount() {
    this.getPicturesFromAPI("red umbrella girl x5");
  }

  getPicturesFromAPI(query) {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ID}&query=${query}`,
      { method: "get" }
    ).then(res =>
      res.json().then(json => {
        this.setState({
          photoList: json
        });
      })
    );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
