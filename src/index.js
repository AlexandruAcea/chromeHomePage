import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import history from "./history";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App history={history} />, document.getElementById("root"));

serviceWorker.unregister();
