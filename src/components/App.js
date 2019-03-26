import "../css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/onboarding" component={Onboarding} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
