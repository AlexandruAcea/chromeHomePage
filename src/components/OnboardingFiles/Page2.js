import React from "react";

const Page2 = () => {
  return (
    <div className="container">
      <h1 id="title">your email address?</h1>
      <p id="subtitle">
        we value your privacy and will only send you things we think you'll like
      </p>
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

export { Page2 };
