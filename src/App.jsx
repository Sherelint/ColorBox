import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
//these two now imported into Palette.js instead
// import seedColors from './seedColors';
// import { generatePalette } from './colorHelpers';
import PaletteList from "./components/PaletteList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:paletteId" element={<Palette />} /> //no more
      palette prop
    </Routes>
  );
}

export default App;
