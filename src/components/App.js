import "../css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";

class App extends Component {
  render() {
    this.props.history.push("/onboarding");

    return (
      <div>
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
