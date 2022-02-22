import React, { useContext, useState } from "react";
import ColorBox from "./ColorBox";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Palette.css";
import { generatePalette } from "../helpers/ColorHelpes";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
export default function Palette(props) {
  const { palettes } = useContext(PalettesContext);
  const { colors } = generatePalette(palettes[4]);
  const [level, setLevel] = useState(500);

  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={(e) => setLevel({ level: e.target.value })}
        />
      </div>

      <div className="Palette-colors">
        {colors[level].map((color) => (
          <ColorBox background={color.hex} name={color.name} />
        ))}
      </div>
    </div>
  );
}
