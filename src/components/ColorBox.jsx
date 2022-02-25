import React, { useState } from "react";
import "../styles/ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { Snackbar } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "../styles/ColorBoxStyles";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
function ColorBox(props) {
  const { background, name, paletteId, colorId } = props;
  const [snack, setSnack] = useState(false);
  const { classes } = props;
  return (
    <CopyToClipboard text={background} onCopy={() => setSnack(true)}>
      <div style={{ background }} className={classes.ColorBox}>
        <div className={classes.copyText}>
          <div className={classes.colorName}>
            <span>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        <Link
          to={`/palette/${paletteId}/${colorId}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={classes.seeMore}>MORE </span>
        </Link>
        <Snackbar
          key="colorbox"
          color="inherit"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={snack}
          autoHideDuration={1500}
          onClose={() => setSnack(false)}
          message={
            <span id="message-id">Copied {background.toUpperCase()}</span>
          }
        />
      </div>
    </CopyToClipboard>
  );
}
export default withStyles(styles)(ColorBox);
