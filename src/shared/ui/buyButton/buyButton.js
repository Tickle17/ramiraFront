import React from "react";
import "./style.css";
export default function BuyButton(props) {
  const addToBasket = () => {
    if (props.visible === false) {
      props.close();
      return;
    } else props.buyItem();
    props.close();
  };
  return (
    <button
      onClick={addToBasket}
      className={props.visible ? "buyButtonEnable" : "buyButtonDisable"}
    >
      {props.visible ? "В корзину" : "Нет в наличии"}
    </button>
  );
}
