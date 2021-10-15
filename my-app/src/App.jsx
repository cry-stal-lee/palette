import React, { useState } from "react";
import "./App.css";

import paletteSvg from '../assets/palette.svg';

export default function App() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleUpload = e => {
    const [file] = e.target.files;
    setSelectedFile(() => URL.createObjectURL(file));
  }


  const euclideanDistance = (a, b) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Math.pow(b[i] - a[i], 2);
    }
    return Math.sqrt(sum);
  }

  return (
    <div className="app">
    <a className="credit" href="http://crystallee.dev">crystal lee</a>
    <div className="palette" style={{ backgroundImage: `url(${paletteSvg})` }}>
      <div className="uploader">
        <input type="file" accept="image/*" multiple={false} onChange={handleUpload} />
      </div>
      <div className="color"></div>
      </div>
    <div className="uploaded-image">
      <img src={ selectedFile }/>
    </div>
    </div>
  );
}
