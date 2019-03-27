import React from "react";

const Page1 = () => {
  return (
    <div className="container">
      <div className="containerInside">
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
    </div>
  );
};

export { Page1 };
