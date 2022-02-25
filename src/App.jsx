import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
//these two now imported into Palette.js instead
import seedColors from "./seedColors";
// import { generatePalette } from './colorHelpers';
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route
        path="/palette/:paletteId/:color:Id"
        element={<SingleColorPalette />}
      />
    </Routes>
  );
}

export default App;
