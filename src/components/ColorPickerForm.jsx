import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import PaletteFormNav from "./PaletteFormNav";
export default function ColorPickerForm(props) {
  const { color, setCurrentColor, AddColor } = props;
  return (
    <div className="flex justify-center content-evenly   h-full w-full flex-wrap flex-col gap-3 ">
      <div className="flex flex-row justify-center gap-1">
        <Button variant="contained" color="secondary">
          Clear Palette
        </Button>
        <Button variant="contained" color="primary">
          Random Color
        </Button>
      </div>
      <div className="flex justify-center items-center flex-col  gap-3">
        <ChromePicker
          width="calc(90/100*400px)"
          color={color}
          onChange={(newColor) => setCurrentColor(newColor.hex)}
        />
        <PaletteFormNav addColor={AddColor} color={color} />
      </div>
    </div>
  );
}
