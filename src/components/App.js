import "../css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home history={this.props.history} />}
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

export default App;
