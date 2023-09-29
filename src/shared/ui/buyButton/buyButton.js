import React from "react";
import "./style.css";
export default function BuyButton(props) {
  return (
    <button
      onClick={props.close}
      className={props.visible ? "buyButtonEnable" : "buyButtonDisable"}
    >
      {props.visible ? "В корзину" : "Нет в наличии"}
    </button>
  );
}
