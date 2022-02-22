import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Navbar(props) {
  const { level, changeLevel } = props;
  return (
    <header className="Navbar">
      <div className="log">
        <a href="#">ReactColorPicker</a>
      </div>
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={(e) => changeLevel(e.target.value)}
        ></Slider>
      </div>
    </header>
  );
}
