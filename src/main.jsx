import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { PalettesProvider } from "./context/SeedColorsContext";
ReactDOM.render(
  <BrowserRouter>
    <PalettesProvider>
      <App />
    </PalettesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
