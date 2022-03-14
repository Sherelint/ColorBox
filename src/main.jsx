import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <App className="font-mono" />
  </BrowserRouter>,
  document.getElementById("root")
);
