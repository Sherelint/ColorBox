import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import styles from "../styles/PaletteListStyles";
function PaletteList(props) {
  const { palettes, classes, history } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <Link
              style={{ textDecoration: "none" }}
              key={palette.id}
              to={`/palette/${palette.id}`}
            >
              <MiniPalette {...palette} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(PaletteList);
