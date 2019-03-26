import { Page1, Page2, Page3 } from "./OnboardingFiles";
import React, { Component } from "react";
import "../css/Onboarding.css";

class Onboarding extends Component {
  state = { currentPage: 1, buttonText: "next" };

  renderSteps() {
    switch (this.state.currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
    }
  }

  nextStep() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  render() {
    return (
      <div className="container">
        {this.renderSteps()}

        <h1 id="nextBtn" onClick={this.nextStep.bind(this)}>
          {this.state.buttonText}
        </h1>
      </div>
    );
  }
}

export default Onboarding;
