import React, { useContext, useState } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import { generatePalette } from "../helpers/ColorHelpes";
import Navbar from "./Navbar";

export default function Palette(props) {
  const { palettes, level, setLevel } = useContext(PalettesContext);
  const { colors } = generatePalette(palettes[4]);
  const changeLevel = (level) => {
    setLevel(level);
  };

  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={(e) => changeLevel(e.target.value)} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
