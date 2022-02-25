import React, { useState } from "react";
import { Slider, Select, MenuItem, Snackbar, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "../styles/NavbarStyles";
function Navbar(props) {
  const { level, handleLevel, handleChange } = props;
  const [snack, setSnack] = useState(false);
  const [format, setFormat] = useState("hex");

  const changeFormat = (e) => {
    handleChange(e.target.value);
    setFormat(e.target.value);
    setSnack(true);
  };

  const changeLevel = (e) => {
    handleLevel(e.target.value);
  };

  const { classes } = props;
  return (
    <header className={classes.Navbar}>
      <button className={classes.logo}>
        <Icon icon="eva:arrow-ios-back-outline" />
        <Link to="/">ReactColorPicker</Link>
      </button>

      <div className={classes.slider}>
        <span>Level:{level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={changeLevel}
            marks
          />
        </div>
      </div>
      <div className={classes.selectContainer}>
        <Select value={format} onChange={changeFormat}>
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
export default withStyles(styles)(Navbar);
