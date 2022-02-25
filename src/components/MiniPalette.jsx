import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes } = props;
  return <div className={classes.main}>MiniPalette</div>;
}

export default withStyles(styles)(MiniPalette);
