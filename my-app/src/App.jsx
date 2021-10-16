import React, { useEffect, useState } from "react";
import useImageColor from 'use-image-color';

import { FiCopy } from 'react-icons/Fi';

import axios from 'axios';

import "./App.css";

import paletteSvg from '../assets/palette.svg';

export default function App() {
  let [selectedFile, setSelectedFile] = useState(() => "");
  let [currentPalette, setCurrentPalette] = useState(() => []);
  const { colors } = useImageColor(selectedFile, { cors: true, colors: 5 });
  let [backgroundColors, setBackgroundColors] = useState(['#d3c9b8', '#debda5', '#e4b69a']);

  useEffect(() => {
    setCurrentPalette(colors);
    if (colors) {
      setBackgroundColors([currentPalette[0], currentPalette[1], currentPalette[2]])
    };
  }, [colors]);

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

  const handleClean = () => {
    setSelectedFile('');
    setCurrentPalette([]);
    setBackgroundColors(['#d3c9b8', '#debda5', '#e4b69a']);
  }

  return (
    <>
    <div className="app" style={{ backgroundImage: `linear-gradient(${backgroundColors[0]}, ${backgroundColors[1]}, ${backgroundColors[2]})` }}> 
      <a className="credit" href="http://crystallee.dev">crystal lee</a>
      <div className="palette" style={{ backgroundImage: `url(${paletteSvg})` }}>
        <div className="uploader">
          <input type="file" accept="image/*" multiple={false} onChange={handleUpload} onClick={e => e.target.value = null} />
          <button onClick={handleClean}>clean palette</button>
        </div>
        {/* {currentPalette ? <><div className="color color-1" style={{ backgroundColor: currentPalette[0] }} />
        <div className="color color-2 " style={{ backgroundColor: currentPalette[1] }}><div>{currentPalette[1]}<FiCopy onClick={() => {navigator.clipboard.writeText(currentPalette[1])}} /></div></div>
        <div className="color color-3" style={{ backgroundColor: currentPalette[2] }} />
        <div className="color color-4" style={{ backgroundColor: currentPalette[3] }} />
        <div className="color color-5" style={{ backgroundColor: currentPalette[4] }} /></>
        : null} */}
      </div>
      <div className="uploaded-image">
        <img src={ selectedFile }/>
      </div>
    </div>
  </>);
}