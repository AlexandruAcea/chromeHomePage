import React from "react";

const Page3 = props => {
  return (
    <div className="container">
      <h1 id="title">choose up to 5 themes</h1>
      <p id="subtitle">
        themes are photo genres that you want to see in your tab.
      </p>
      <ul className="list">
        {props.dataSet.map(function(item, i) {
          return (
            <li
              key={i}
              className={item.selected}
              onClick={() => props.listOnClick(i)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Page3 };
