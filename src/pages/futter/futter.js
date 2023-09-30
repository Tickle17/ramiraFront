import React from "react";
import YandexMap from "./yandexMap/YandexMap";
import FutterInfo from "./futterInfo/futterInfo";
import "./style.css";

export default function Futter(props) {
  return (
    <div>
      <YandexMap props={props}></YandexMap>
      <FutterInfo props={props}></FutterInfo>
      <div className="createInfo">
        © Ramira 2023 - All rights reserved ||
        <a href="https://t.me/tickle17">Designed By: Tickle</a>
      </div>
    </div>
  );
}
