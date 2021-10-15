import React, { useEffect, useState } from "react";

import axios from 'axios';

import "./App.css";

import paletteSvg from '../assets/palette.svg';

export default function App() {
  let [selectedFile, setSelectedFile] = useState(() => "");
  let [currentPalette, setCurrentPalette] = useState(() => []);

  const handleUpload = e => {
    const file = e.target.files[0];
    let data = new FormData();
    data.append('file', file);
    axios.post("http://localhost:3001/upload", data, {})
    .then(res => {
      setSelectedFile(`/${res.data}`);
    })
    .catch(err => {
      console.log(err);
    })
  };

  // useEffect(() => {
  //   console.log(`Color: ${color}`);
  //   console.log(`Palette: ${palette}`);
  // }, [palette, color]);

  return (
    <div className="app">
    <a className="credit" href="http://crystallee.dev">crystal lee</a>
    <div className="palette" style={{ backgroundImage: `url(${paletteSvg})` }}>
      <div className="uploader">
        <input type="file" accept="image/*" multiple={false} onChange={handleUpload} onClick={e => e.target.value = null} />
      </div>
      <div className="color"></div>
      
      </div>
    <div className="uploaded-image">
      <img src={ selectedFile }/>
    </div>
    </div>
  );
}
