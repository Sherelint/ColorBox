import React from "react";
import "../styles/ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";
export default function ColorBox(props) {
  return (
    <CopyToClipboard text={props.background}>
      <div style={{ background: props.background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-container">
            <span>{props.name}</span>
          </div>
          <button className="copy-button">Copy</button>
          <span className="see-more">MORE</span>
        </div>
      </div>
    </CopyToClipboard>
  );
}
