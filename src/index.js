import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import history from "./history";
import * as serviceWorker from "./serviceWorker";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <App history={history} />
  </CookiesProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
