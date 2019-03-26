import "../css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";

class App extends Component {
  render() {
    //Push user to Onboarding
    //Needs conditional stuff
    this.props.history.push("/onboarding");

    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/onboarding" component={Onboarding} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
