import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { generatePalette } from "../helpers/ColorHelpes";
import seedColors from "../seedColors";
import { Icon } from "@iconify/react";
import { withStyles } from "@mui/styles";
import styles from "../styles/SinglrColorPaletteStyle";
import { Link, useParams } from "react-router-dom";
import { Snackbar, IconButton } from "@mui/material";
//make sure to import seedColors and generatePalette

function SingleColorPalette(props) {
  const { classes } = props;
  const { paletteId, colorId } = useParams(); //useParams to get the :paletteId
  const [snack, setSnack] = useState(false);
  const [format, setFormat] = useState("hex");

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const findPalette = (id) => {
    //same findPalette function in the lesson
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  const changeFormat = (val) => {
    setFormat(val);
  };

  const palette = generatePalette(findPalette(paletteId));
  const _shades = gatherShades(palette, colorId);
  //this used to be the palette prop, now simply defined inside of Palette.js

  const colorBoxes = _shades.map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.name}
      showLink={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        handleChange={changeFormat}
        showSlider={false}
        paletteId={paletteId}
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <footer className={classes.PaletteFooter}>
        {colorId}
        <span className={classes.emoji}>{palette.emoji}</span>
      </footer>
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
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
