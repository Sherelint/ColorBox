import React, { useContext, useState } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import Navbar from "./Navbar";

export default function Palette(props) {
  const { level, colors } = useContext(PalettesContext);

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
