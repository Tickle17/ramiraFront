import React from "react";
import { Grid } from "@mui/material";
import "./style.css";

export default function NavMenu(props) {
  return (
    <Grid container item xs={12} className="nav">
      <div className="navItems">
        <li
          onClick={() => {
            props.scrollToSection(props.comboRef);
          }}
        >
          Комбо
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.burgerRef);
          }}
        >
          Бургеры
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.sandwichRef);
          }}
        >
          Сэндвичи
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.snacksRef);
          }}
        >
          Закуски
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.salatRef);
          }}
        >
          Салаты
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.mapRef);
          }}
        >
          Мы на карте
        </li>
        <li
          onClick={() => {
            props.scrollToSection(props.comboRef);
          }}
        >
          Контакты
        </li>
      </div>
    </Grid>
  );
}
