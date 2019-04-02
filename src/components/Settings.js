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

  handleListClick(item, i) {
    const { dataSet } = this.state;

    if (!item.selected) {
      dataSet.forEach(item => {
        item.selected = false;
      });
      dataSet[i].selected = true;
    }

    this.setState({ dataSet: dataSet });
  }

  handleListClickTest() {
    const { dataSet } = this.state;
    for (var i = 0; i < dataSet.length; i++)
      if (dataSet[i].selected)
        switch (dataSet[i].title) {
          case "Image":
            return <ImagesPage />;
          case "Quote":
          case "About":
          default:
        }
  }

  render() {
    const componentClasses = ["containerSettings"];
    const { dataSet } = this.state;

    if (this.props.show) componentClasses.push("show");

    return (
      <div className={componentClasses.join(" ")}>
        <div className="contentRight">{this.handleListClickTest()}</div>
        <div className="contentLeft">
          <ul className="settingsList">
            {dataSet.map((item, i) => {
              return (
                <li
                  key={i}
                  className={
                    this.state.dataSet[i].selected
                      ? "settingsListItemActive"
                      : "settingsListItem"
                  }
                  onClick={this.handleListClick.bind(this, item, i)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div id="divider" />
      </div>
    );
  }
}

export default Settings;
