import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="container">
      <header className="header"><Header/></header>
      <div className="main">
        <div className="list">List</div>
        <div className="map">Map</div>
      </div>
    </div>
  );
}

export default App;