import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import List from "./components/List/List";

function App() {
  const [select, setSelect] = useState("Search");

  function changeSelect(selected) {
    setSelect(selected);
  }

  return (
    <div className="App">

      <Navbar tab={(data) => changeSelect(data)} />

      <h1 className="title">STAR WARS</h1>
      <br></br>
      <p>Create and add your favorites from the star war's universe</p>

      <br></br>

      <List send={select} />
    </div>
  );
}

export default App;
