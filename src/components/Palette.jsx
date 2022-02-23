import React, { useContext, useState } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import Navbar from "./Navbar";

export default function Palette(props) {
  const { level, colors, format, palettes } = useContext(PalettesContext);

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palettes[4].paletteName}
        <span className="emoji">{palettes[4].emoji}</span>
      </footer>
    </div>
  );
}
