import "./App.css";
import Header from "../pages/header/header";
// import Futter from "../pages/futter/futter";
import Body from "../pages/body/body";
import React from "react";
import Futter from "../pages/futter/futter";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Header></Header>
      <div className="bodyContent">
        <Body></Body>
        <Futter></Futter>
      </div>
    </div>
  );
}

export default App;
