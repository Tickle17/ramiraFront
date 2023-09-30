import React, { useRef } from "react";
import { Grid } from "@mui/material";
import NavMenu from "../../features/navMenu/navMenu";
import "./style.css";
import BodyMenu from "./menuPage/bodyMenu";
import NavBurger from "../../features/navMenu/navBurger/navBurger";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMenuBurger,
  openMenuBurger,
  selectIsBurgerOpen,
} from "../../features/navMenu/navBurger/navBurgerSlice";
import { useMediaQuery } from "@mui/material";
import Futter from "../futter/futter";

export default function Body() {
  const comboRef = useRef(null);
  const burgerRef = useRef(null);
  const sandwichRef = useRef(null);
  const snacksRef = useRef(null);
  const salatRef = useRef(null);
  const drinksRef = useRef(null);
  const mapRef = useRef(null);
  const contactRef = useRef(null);

  const isBurgerOpen = useSelector(selectIsBurgerOpen);
  const dispatch = useDispatch();

  // Проверяем, соответствует ли текущий размер экрана медиа-запросу
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");

  const openBurger = () => {
    dispatch(openMenuBurger());
  };
  const closeBurger = () => {
    dispatch(closeMenuBurger());
  };
  const scrollToSection = (ref) => {
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offset = elementPosition + window.scrollY - 40;

    if (offset !== 0) {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const refsProps = {
    comboRef,
    burgerRef,
    sandwichRef,
    snacksRef,
    salatRef,
    drinksRef,
    mapRef,
    contactRef,
    scrollToSection,
  };
  const menuBurgerProps = {
    openBurger,
    closeBurger,
    isBurgerOpen,
  };
  return (
    <Grid>
      {isSmallScreen ? (
        <NavBurger {...menuBurgerProps} {...refsProps}></NavBurger>
      ) : (
        <Grid container>
          <NavMenu {...refsProps}></NavMenu>
        </Grid>
      )}

      <Grid className="bodyBG">
        <Grid className="title">
          <div> Вкуснейшие бургеры и сэндвичи</div>
          <p>C доставкой от 40 минут в Волгограде</p>
        </Grid>
      </Grid>
      <BodyMenu {...refsProps}></BodyMenu>
      <Futter {...refsProps}></Futter>
    </Grid>
  );
}
