import React from "react";
import "./style.css";
export default function BuyButton(props) {
  const addToBasket = () => {
    props.buyItem(); // Вызов первой функции
    props.close(); // Вызов второй функции
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
