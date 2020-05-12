import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import List from './components/List/list';

function App() {
  return (
    <div className = "App">

    <Navbar/>

    <h1 className ="title">
      STAR WARS</h1>
      <br></br>
    <p>Create and add your favorites from the star war's universe</p>

    <br></br>

    <List/>


    </div>
  );
}

export default App;
