import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
export default function PaletteList(props) {
  const { palettes } = props;
  return (
    <div>
      <MiniPalette />
      {palettes.map((palette) => (
        <p key={palette.id}>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}
