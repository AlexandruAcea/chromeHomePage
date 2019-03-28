import "../css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";
import { withCookies } from "react-cookie";

class App extends Component {
  render() {
    //Push user to Onboarding
    //Needs conditional stuff

    //this.props.history.push("/onboarding");

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  cookies={this.props.cookies}
                  history={this.props.history}
                />
              )}
            />
            <Route
              path="/onboarding"
              render={() => (
                <Onboarding
                  cookies={this.props.cookies}
                  history={this.props.history}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withCookies(App);
