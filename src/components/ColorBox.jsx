import React, { useState } from "react";
import "../styles/ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { Snackbar } from "@mui/material";
import { Link } from "react-router-dom";

function ColorBox(props) {
  const { background, name, paletteId, colorId, showLink } = props;
  const [snack, setSnack] = useState(false);
  return (
    <CopyToClipboard text={background} onCopy={() => setSnack(true)}>
      <div
        style={{ background }}
        className="w-1/5 h-3/6 inline-block relative cursor-pointer m-0 -mb-3.5 hover:opacity-100 lg:w-1/4 lg:h-2/6 md:w-1/2 md:h-1/5 sm:w-full sm:h-1/6"
      >
        <div className="copyText">
          <div className="absolute w-full p-2 text-black  uppercase text-xs">
            <span className="colorName">{name}</span>
          </div>
          <button className="w-24 h-7 absolute inline-block top-1/2 left-1/2 -ml-12 -mt-3 text-center outline-none bg-white bg-opacity-30 text-base uppercase border-none opacity-0 no-underline  hover:opacity-100">
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="bg-white bg-opacity-30 absolute border-none w-16 h-8 text-center leading-8 uppercase right-0 bottom-3">
              MORE{" "}
            </span>
          </Link>
        )}
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
export default ColorBox;
