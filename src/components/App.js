import "../css/App.css";
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Onboarding from "./Onboarding";
import Home from "./Home";
import AppProvider from "./AppProvider";

class App extends Component {
  render() {
    return (
      <Router forceRefresh={true} history={this.props.history}>
        <AppProvider history={this.props.history}>
          <div>
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
          </div>
        </AppProvider>
      </Router>
    );
  }
}

export default App;
