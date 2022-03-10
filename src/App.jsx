import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
//these two now imported into Palette.js instead
import seedColors from "./seedColors";
// import { generatePalette } from './colorHelpers';
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/palette/new"
        element={<NewPaletteForm maxColors={20} palettes={seedColors} />}
      />
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
    </Routes>
  );
}

export default App;
