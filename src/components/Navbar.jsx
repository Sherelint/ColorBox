import React, { useState } from "react";
import { Slider, Select, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
//import "rc-slider/assets/index.css";
import "../styles/Navbar.css";
export default function Navbar(props) {
  const { level, changeLevel, handleChange, colors } = props;
  const [format, setFormat] = useState("hex");
  const handlerChange = (e) => {
    setFormat({ format: e.target.value });
    handleChange(format);
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
            key={level}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={changeLevel}
            marks
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handlerChange}>
          <MenuItem value="hex">HEX - #FFFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,25,0.1)</MenuItem>
        </Select>
      </div>
    </header>
  );
}
