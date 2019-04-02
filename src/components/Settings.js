import React, { Component } from "react";
import "../css/Settings.css";
import { ImagesPage } from "./SettingsFiles";

class Settings extends Component {
  state = {
    dataSet: [
      { title: "Image", selected: true },
      { title: "Quote", selected: false },
      { title: "About", selected: false }
    ]
  };

  handleListClick() {
    console.log("hello");
  }

  render() {
    const componentClasses = ["containerSettings"];
    const { dataSet } = this.state;

    if (this.props.show) componentClasses.push("show");

    return (
      <div className={componentClasses.join(" ")}>
        <div className="contentLeft">
          <ul className="settingsList">
            {dataSet.map((item, i) => {
              return (
                <li
                  key={i}
                  className="settingsListItem"
                  onClick={this.handleListClick.bind(this)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div id="divider" />

        <div className="contentRight">awd</div>
      </div>
    );
  }
}

export default Settings;
