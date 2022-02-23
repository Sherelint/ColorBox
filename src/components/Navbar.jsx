import React from "react";
import { Slider } from "@mui/material";
//import "rc-slider/assets/index.css";
import "../styles/Navbar.css";
export default function Navbar(props) {
  const { level, changeLevel } = props;

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">ReactColorPicker</a>
      </div>
      <div className="slider-container">
        <span>Level:{level}</span>
      </div>
      <div className="slider">
        <Slider
          key={level}
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={changeLevel}
          marks
        ></Slider>
      </div>
    </header>
  );
}
