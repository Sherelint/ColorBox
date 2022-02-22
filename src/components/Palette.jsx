import React, { useContext, useState } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import { generatePalette } from "../helpers/ColorHelpes";
import Navbar from "./Navbar";

export default function Palette(props) {
  const { palettes } = useContext(PalettesContext);
  const { colors } = generatePalette(palettes[4]);
  const [level, setLevel] = useState(500);

  const changeLevel = (level) => setLevel({ level });
  const colorBoxes = colors[level].map((color) => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={() => setLevel(level)} />
      <div className="Palette-colors">
        {console.log(level)}
        {console.log(colors[level])}
        {colorBoxes}
      </div>
    </div>
  );
}

{
  /*colors[level].map((color) => (
  <ColorBox key={color.id} background={color.hex} name={color.name} />
))*/
}
