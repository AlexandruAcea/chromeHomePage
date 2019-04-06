import Context from "./Context";
import React, { Component } from "react";
import { UNSPLASH_ID } from "../types";
import Cookies from "universal-cookie";
import background from "../assets/photo1.jpg";

const cookies = new Cookies();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      selectedPhoto: 0,
      queries: cookies.get("queries"),
      backgroundImage: cookies.get("background"),
      photographer: "",
      link: "",
      showSettings: false
    };
    this.refresh = queries => this.getPicturesFromAPI(queries);
    this.setSettings = showSettings => this.setState(showSettings);
    this.setSelectedPhoto = selectedPhoto => this.setState(selectedPhoto);
    this.updateList = photoList => this.setState(photoList);
    this.setBackground = backgroundImage => this.setState(backgroundImage);
  }

  componentDidMount() {
    if (typeof cookies.get("queries") === "undefined")
      this.props.history.push("/onboarding");
    else this.getPicturesFromAPI(this.state.queries);
  }

  getPicturesFromAPI(query) {
    this.setState({ queries: query });

    fetch(
      `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ID}&query=${query}&page=1`,
      { method: "get" }
    ).then(res =>
      res.json().then(json => {
        if (typeof json.results[1] !== "undefined") {
          const data = json.results[this.state.selectedPhoto];

          json.results.forEach(function(entry) {
            entry.isSelected = false;
          });

          json.results[this.state.selectedPhoto].isSelected = true;

          if (typeof cookies.get("background") === "undefined")
            cookies.set("background", data.urls.full, { path: "/" });

          this.setState({
            photoList: json,
            //backgroundImage: data.urls.full,
            photographer: data.user.name,
            link: data.user.links.html
          });
        }
      })
    );
  }

  render() {
    const {
      refresh,
      setSettings,
      setSelectedPhoto,
      updateList,
      setBackground
    } = this;
    const state = this.state;

    return (
      <Context.Provider
        value={{
          state,
          refresh,
          setSettings,
          setSelectedPhoto,
          updateList,
          setBackground
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
