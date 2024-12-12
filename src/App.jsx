import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ProfileList from "./Components/List/List";

function App() {
  return (
    <div className="container">
      <header className="header"><Header/></header>
      <div className="main">
        <div className="list"><ProfileList/></div>
        <div className="map">Map</div>
      </div>
    </div>
  );
}

export default App;