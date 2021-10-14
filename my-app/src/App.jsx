import React from "react";
import Pokemons from "./features/Pokemons";
import logo from "./logo.svg";
import "./App.css";

import paletteSvg from '../assets/palette.svg';

export default function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img src={paletteSvg} alt='palette' className="Palette"/>
      {/* <p>Hello!</p>
      <Pokemons />
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/tutorials/rtk-query"
          target="_blank"
          rel="noopener noreferrer"
        >
          RTK Query
        </a>
      </p> */}
    </div>
  );
}
