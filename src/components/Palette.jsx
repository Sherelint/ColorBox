import React, { useContext } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import usePalette from "../hooks/usePalette";
import "../styles/Palette.css";
export default function Palette(props) {
  const { palettes } = useContext(PalettesContext);
  const { colors } = palettes[4];
  return (
    <div className="Palette">
      <div className="Palette-colors">
        {colors.map((color) => (
          <ColorBox background={color.color} name={color.name} />
        ))}
      </div>
    </div>
  );
}
