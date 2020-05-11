import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ListItem from './components/List/ListItem/list-item';
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

    <ListItem/>
    <List/>


    </div>
  );
}

export default App;
