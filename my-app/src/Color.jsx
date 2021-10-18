import React, { useState } from "react";
import { FiCopy } from 'react-icons/Fi';
import "./App.css";

export default function Color({ currentPalette, index }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const pickTextColorBasedOnBgColor = (bgColor) => {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      '#000000' : '#FFFFFF';
  }

  const handleHover = () => {
    setShow(true);
    setCopied(false);
  }

  const handleCopy = e => {
    navigator.clipboard.writeText(currentPalette[index]);
    setCopied(true);
  }

  return (
    <div className={`color color-${index}`} style={{ backgroundColor: currentPalette[index] }}
    onMouseEnter={handleHover} onMouseLeave={() => setShow(false)}>
        { show ? <div className="hexcode tooltiptext" style={{ color: pickTextColorBasedOnBgColor(currentPalette[index]) }}>{currentPalette[index]}
        <div className="tooltip"><FiCopy className="pointer" onClick={handleCopy} />
          { copied ? <span className="tooltiptext">Copied!</span> : <span className="tooltiptext">Copy HEX</span>}
        </div>
        </div>
        : null }
    </div>
  );
};