import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "../css/Home.css";
import Context from "./Context";
import gearIcon from "../assets/gear.svg";
import Settings from "./Settings";

const Home = () => {
  const value = useContext(Context);
  const { showSettings, backgroundImage, photographer, link } = value.state;
  const list = value.state.photoList.results;

  function handleSettingsClick() {
    value.setSettings({ showSettings: !showSettings });
  }

  return (
    <div
      className="containerHome"
      style={{
        backgroundImage: "url(" + backgroundImage + ")"
      }}
    >
      <div id="background" />

      <h1 id="quote">
        "The only way to do great work is to love what you do."
      </h1>

      <Settings photoList={list} show={showSettings} />

      <h1 id="titleMain">good morning, ace.</h1>

      <div className="bottomLeft">
        <h1 id="photographer">photographer</h1>
        <a href={link}>
          <p id="nameOfPhotographer">{photographer}</p>
        </a>
      </div>
      <img
        src={gearIcon}
        id="gear"
        alt="settings"
        onClick={handleSettingsClick}
      />
    </div>
  );
};

export default withRouter(Home);
