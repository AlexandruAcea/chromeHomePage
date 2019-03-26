import React from "react";
import "../../css/OnboardingPages/Page1.css";

const Page1 = () => {
  return (
    <div className="container">
      <h1 id="title">hey, what's your name?</h1>
      <form>
        <input
          type="text"
          //value={this.state.value}
          //onChange={this.handleChange}
        />
      </form>
      <div className="line" />
    </div>
  );
};

export { Page1 };
