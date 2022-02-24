import React, { useContext } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import Navbar from "./Navbar";

export default function Palette(props) {
  const { level, colors, format, palettes } = useContext(PalettesContext);
  const { id } = props;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palettes[id].paletteName}
        <span className="emoji">{palettes[id].emoji}</span>
      </footer>
    </div>
  );
}
