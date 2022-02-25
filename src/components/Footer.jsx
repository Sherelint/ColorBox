import { withStyles } from "@mui/styles";
import React from "react";
import styles from "../styles/PaletteFooterStyles";
function Footer(props) {
  const { classes, name, emoji } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {name}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
