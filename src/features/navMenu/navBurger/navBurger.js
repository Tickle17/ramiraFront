import React from "react";
import "./style.css";
export default function NavBurger(props) {
  const burgerClose = (e) => {
    if (e.target.classList.contains("bgMenu")) {
      props.closeBurger();
    }
  };
  return (
    <div className={props.isBurgerOpen ? "bgMenu" : ""} onClick={burgerClose}>
      <div className={`sidebar ${props.isBurgerOpen ? "open" : ""}`}>
        <ul>
          <li
            onClick={() => {
              props.scrollToSection(props.comboRef);
              props.closeBurger();
            }}
          >
            <span>Комбо</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.burgerRef);
              props.closeBurger();
            }}
          >
            <span>Бургеры</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.sandwichRef);
              props.closeBurger();
            }}
          >
            <span>Сэндвичи</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.snacksRef);
              props.closeBurger();
            }}
          >
            <span>Закуски</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.salatRef);
              props.closeBurger();
            }}
          >
            <span>Салаты</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.mapRef);
              props.closeBurger();
            }}
          >
            <span> Мы на карте</span>
          </li>
          <li
            onClick={() => {
              props.scrollToSection(props.contactRef);
              props.closeBurger();
            }}
          >
            <span>Контакты</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
