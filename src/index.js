import React from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
