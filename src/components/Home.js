import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "../css/Home.css";
import Context from "./Context";
import gearIcon from "../assets/gear.svg";
import Settings from "./Settings";

const Home = () => {
  const value = useContext(Context);
  const {
    showSettings,
    backgroundImage,
    photographer,
    link,
    gear
  } = value.state;
  const list = value.state.photoList.results;

  function handleSettingsClick() {
    value.setSettings({ showSettings: !showSettings });

    if (gear === "gear") value.setGear({ gear: "gearShow" });
    else value.setGear({ gear: "gear" });
  }

  function handleBackgroundClick() {
    if (showSettings) {
      value.setSettings({ showSettings: !showSettings });
      value.setGear({ gear: "gear" });
    }
  }

  return (
    <div
      className="containerHome"
      style={{
        backgroundImage: "url(" + backgroundImage + ")"
      }}
    >
      <div id="background" onClick={handleBackgroundClick} />

      <h1 id="quote">
        "The only way to do great work is to love what you do."
      </h1>

      <Settings photoList={list} show={showSettings} />

      <h1 id="titleMain">good morning, ace.</h1>

      <div className="bottomLeft">
        <h1 id="photographer">photographer</h1>
        <a href={link}>
          <p id="nameOfPhotographer">{photographer + " / Unsplash"}</p>
        </a>
      </div>
      <img
        src={gearIcon}
        className={gear}
        alt="settings"
        onClick={handleSettingsClick}
      />
    </div>
  );
};

export default withRouter(Home);
