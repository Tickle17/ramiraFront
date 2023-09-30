import "./App.css";
import Header from "../pages/header/header";
import Body from "../pages/body/body";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Header></Header>
      <div className="bodyContent">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
