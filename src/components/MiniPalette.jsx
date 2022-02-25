import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../styles/MiniPaletteStyles";
import { Link } from "react-router-dom";
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        {colors.map((color) => (
          <div
            key={color.name}
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
