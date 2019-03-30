import { Page1, Page2, Page3, Page4 } from "./OnboardingFiles";
import React, { Component } from "react";
import "../css/Onboarding.css";

var select = 0;
var buttonText = "next";

class Onboarding extends Component {
  state = {
    buttonText: "next",
    currentPage: 1,
    finish: false,
    categoryList: [
      { title: "architecture", selected: "false" },
      { title: "art", selected: "false" },
      { title: "photography", selected: "false" },
      { title: "black", selected: "false" },
      { title: "color", selected: "false" },
      { title: "landscape", selected: "false" },
      { title: "artistic", selected: "false" },
      { title: "nature", selected: "false" },
      { title: "mountains", selected: "false" },
      { title: "design", selected: "false" },
      { title: "fashion", selected: "false" },
      { title: "sunset", selected: "false" },
      { title: "moutains", selected: "false" },
      { title: "snow", selected: "false" }
    ]
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
        console.log("You are at" + this.state.currentPage);
        return <Page1 />;
      case 2:
        console.log("You are at" + this.state.currentPage);
        return <Page2 />;
      case 3:
        console.log("You are at" + this.state.currentPage);
        return (
          <Page3
            dataSet={this.state.categoryList}
            listOnClick={this.handleListClick.bind(this)}
          />
        );
      case 4:
        console.log("You are at" + this.state.currentPage);
        return <Page4 />;

      case 5:
        console.log("You are at" + this.state.currentPage);
    }
  }

  nextStep() {
    if (this.state.currentPage === 2) buttonText = "or skip for now";
    if (this.state.currentPage === 3) buttonText = "open my new tab";

    if (this.state.currentPage === 4) {
      const { cookies } = this.props;

      var queries = "";
      for (var item in this.props.categoryList) {
        queries = queries + " " + item.title;
      }

      if (this.state.currentPage === 4) {
        cookies.set("queries", queries, { path: "/" });
      }
      this.props.history.push("/");
      this.setState({ finish: true });
    }

    this.setState({
      buttonText: buttonText,
      currentPage: this.state.currentPage + 1
    });
  }

  render() {
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

export default Onboarding;
