import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import styles from "../styles/PaletteListStyles";
function PaletteList(props) {
  const { palettes, classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette {...palette} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(PaletteList);
