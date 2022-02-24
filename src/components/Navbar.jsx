import React, { useContext, useState } from "react";
import { Slider, Select, MenuItem, Snackbar, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { PalettesContext } from "../context/SeedColorsContext";
import "../styles/Navbar.css";
export default function Navbar(props) {
  const { level, setLevel, format, setFormat } = useContext(PalettesContext);
  const [snack, setSnack] = useState(false);

  const handleChange = (e) => {
    setFormat(e.target.value);
    setSnack(true);
  };
  return (
    <header className="Navbar">
      <a href="#">
        <button className="logo">
          <Icon icon="eva:arrow-ios-back-outline" />
          <h4 href="#">ReactColorPicker</h4>
        </button>
      </a>
      <div className="slider-container">
        <span>Level:{level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={(e) => setLevel(e.target.value)}
            marks
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #FFFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,25,0.1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        key="navbar"
        color="inherit"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snack}
        autoHideDuration={1500}
        onClose={() => setSnack(false)}
        message={
          <span id="message-id">Format Changed to {format.toUpperCase()}</span>
        }
        action={[
          <IconButton
            color="inherit"
            key="close"
            aria-label="close"
            onClick={() => setSnack(false)}
            children={<Icon icon="codicon:chrome-close" />}
          />,
        ]}
      />
    </header>
  );
}
