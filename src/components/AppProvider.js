import Context from "./Context";
import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      cool: "ace"
    };
    this.update = cool => this.setState(cool);
  }

  componentDidMount() {
    this.getPicturesFromAPI("ferrari");
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
    const { update } = this;
    const state = this.state;

    return (
      <Context.Provider value={{ state, update }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
