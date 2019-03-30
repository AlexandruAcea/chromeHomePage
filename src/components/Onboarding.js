import { Page1, Page2, Page3, Page4 } from "./OnboardingFiles";
import { TABS } from "../types";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import React, { Component } from "react";
import "../css/Onboarding.css";

var select = 0;
var buttonText = "next";
var queries = "";
const cookies = new Cookies();

class Onboarding extends Component {
  state = {
    buttonText: "next",
    currentPage: 1,
    categoryList: TABS
  };

  handleListClick(i) {
    const newItems = [...this.state.categoryList];

    if (newItems[i].selected === "false") {
      newItems[i].selected = "true";
      select++;
    } else {
      newItems[i].selected = "false";
      if (select > 0) select--;
    }

    if (select > 0) buttonText = "choose these";
    else buttonText = "or skip for now";

    this.setState({ categoryList: newItems, buttonText: buttonText });
  }

  renderSteps(currentPage) {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return (
          <Page3
            dataSet={this.state.categoryList}
            listOnClick={this.handleListClick.bind(this)}
          />
        );
      case 4:
        return <Page4 />;
      default:
    }
  }

  nextStep() {
    if (this.state.currentPage === 2) buttonText = "or skip for now";

    if (this.state.currentPage === 3) {
      buttonText = "open my new tab";

      for (var i = 0; i < this.state.categoryList.length; i++)
        if (this.state.categoryList[i].selected === "true")
          if (queries === "") queries = this.state.categoryList[i].title;
          else queries = queries + "," + this.state.categoryList[i].title;
    }

    if (this.state.currentPage === 4) {
      cookies.set("queries", queries, { path: "/" });
      this.props.history.push("/");
    }

    this.setState({
      buttonText: buttonText,
      currentPage: this.state.currentPage + 1
    });
  }

  render() {
    if (typeof cookies.get("queries") !== "undefined")
      this.props.history.push("/");

    return (
      <div className="containerOnboarding">
        {this.renderSteps(this.state.currentPage)}

        <div className="buttonDiv">
          <h1 id="nextBtn" onClick={this.nextStep.bind(this)}>
            {this.state.buttonText}
          </h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Onboarding);
