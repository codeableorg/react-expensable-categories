import { Global } from "@emotion/react";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { global, reset } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
