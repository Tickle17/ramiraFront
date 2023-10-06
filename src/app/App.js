import "./App.css";
import Header from "../pages/header/header";
import Body from "../pages/body/body";
import React from "react";
import {
  setAuthenticated,
  setUnauthenticated,
} from "../features/authSlice/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const checkTokenAndSetAuthStatus = (token) => (dispatch) => {
    if (
      token ===
      "98bd5806929b8e6cadd4ffd3d79afa893c3e30f43d934481bd3f37273689edb2"
    ) {
      dispatch(setAuthenticated());
    } else {
      dispatch(setUnauthenticated());
    }
  };
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  dispatch(checkTokenAndSetAuthStatus(token));

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
