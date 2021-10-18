import React, { useEffect, useState } from 'react';
import useImageColor from 'use-image-color';
import axios from 'axios';

import "./App.css";

import paletteSvg from './assets/palette.svg';

import Color from './Color.jsx';

export default function App(props) {
  let [selectedFile, setSelectedFile] = useState(() => "");
  let [currentPalette, setCurrentPalette] = useState(() => []);
  const { colors } = useImageColor(selectedFile, { cors: true, colors: 5 });
  let [backgroundColors, setBackgroundColors] = useState(['#d3c9b8', '#debda5', '#e4b69a', '#956c52']);

  useEffect(() => {
    setCurrentPalette(colors);
    if (colors) {
      setBackgroundColors([colors[0], colors[1], colors[2], colors[4]])
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
    <div className="app" style={{ backgroundImage: `linear-gradient(${backgroundColors[0]}, ${backgroundColors[1]}, ${backgroundColors[2]})`, color: backgroundColors[3] }}> 
      <a className="credit" href="http://crystallee.dev">crystal lee</a>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', }}>
        <div className="palette" style={{ backgroundImage: `url(${paletteSvg})` }}>
          <div className="uploader">
            <input type="file" accept="image/*" multiple={false} onChange={handleUpload} onClick={e => e.target.value = null} />
            <button onClick={handleClean}>clean palette</button>
          </div>
          { currentPalette ? currentPalette.map((color, index) => (
            <Color key={index} index={index} currentPalette={currentPalette} />
          )) : null }
        </div>
        <div className="uploaded-image">
          <img src={ selectedFile }/>
        </div>
      </div>
    </div>
  </>);
}