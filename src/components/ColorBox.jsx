import React, { useContext, useState } from "react";
import "../styles/ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { PalettesContext } from "../context/SeedColorsContext";
import { IconButton, Snackbar } from "@mui/material";
import { Icon } from "@iconify/react";
export default function ColorBox(props) {
  const { background, name } = props;
  const [snack, setSnack] = useState(false);

  return (
    <CopyToClipboard text={background} onCopy={() => setSnack(true)}>
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-container">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
        <Snackbar
          key="colorbox"
          color="inherit"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={snack}
          autoHideDuration={1500}
          onClose={() => setSnack(false)}
          message={
            <span id="message-id">
              Format Changed to {background.toUpperCase()}
            </span>
          }
        />
      </div>
    </CopyToClipboard>
  );
}
