import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as BurgerMenu } from "../../shared/img/burgerMenu.svg";
import { ReactComponent as Profile } from "../../shared/img/profile.svg";
import { ReactComponent as Plus } from "../../shared/img/createNewItem.svg";
import { ReactComponent as Basket } from "../../shared/img/basket.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import ModalBasket from "../../features/modalBasket/modalBasket";
import { useDispatch, useSelector } from "react-redux";
import {
  closeBasketModal,
  openBasketModal,
  selectIsModalBasketOpen,
} from "../../features/modalBasket/modalBasketSlice";
import { Grid, useMediaQuery } from "@mui/material";
import { openMenuBurger } from "../../features/navMenu/navBurger/navBurgerSlice";
import { selectIsAuthenticated } from "../loginPage/authSlice/authSlice";
import { selectIsBasketEmpty } from "../../features/modalBasket/basketSlice/basketSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isBasketModalOpen = useSelector(selectIsModalBasketOpen);
  const openBurger = () => {
    dispatch(openMenuBurger());
  };
  const openModalHandler = () => {
    dispatch(openBasketModal());
  };

  const closeModalHandler = () => {
    const elem = document.getElementById("modalBasket");
    elem.classList.add("modalClose");
    setTimeout(() => {
      dispatch(closeBasketModal());
    }, 300);
  };
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");

  const modalProps = {
    openModalHandler,
    closeModalHandler,
  };

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isBasketEmpty = useSelector(selectIsBasketEmpty);
  useEffect(() => {
    const redDot = document.querySelector(".red-dot");

    if (isBasketEmpty) {
      redDot.style.display = "none";
    } else redDot.style.display = "block";
    console.log(isBasketEmpty);
  }, [isBasketEmpty]);
  return (
    <Grid container className="header">
      {isSmallScreen ? (
        <Grid container className="header">
          <Grid item xs={4} className="title">
            <a href="/">Ramira</a>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid container item xs={3} style={{ alignItems: "center" }}>
            <Grid container justifyContent="flex-end" item xs={5}>
              <button onClick={openModalHandler}>
                <Basket></Basket>
              </button>
            </Grid>
            <Grid container justifyContent="flex-end" item xs={5}>
              <button onClick={openBurger}>
                <FaBars />
              </button>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container className="header">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} className="title">
            <NavLink to={"/"}>Ramira</NavLink>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent="flex-end"
            style={{ alignItems: "center" }}
          >
            <Grid container item xs={6}></Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              item
              xs={5}
            >
              {isAuthenticated ? (
                <Grid container alignItems="center">
                  <Grid container item xs={3}>
                    <NavLink to="/login/create">
                      <Plus></Plus>
                    </NavLink>
                  </Grid>
                  <Grid container item xs={3}>
                    <NavLink to="/login">
                      <Profile></Profile>
                    </NavLink>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={3}
                    onClick={() => openModalHandler()}
                  >
                    <Basket></Basket>
                  </Grid>
                  <Grid container item xs={3}>
                    <button onClick={openBurger}>
                      <BurgerMenu></BurgerMenu>
                    </button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container>
                  <Grid
                    container
                    item
                    xs={6}
                    onClick={() => openModalHandler()}
                  >
                    <Basket></Basket>
                  </Grid>
                  <Grid container item xs={6}>
                    <button onClick={openBurger}>
                      <BurgerMenu></BurgerMenu>
                    </button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
      {isBasketModalOpen && <ModalBasket {...modalProps}></ModalBasket>}
    </Grid>
  );
}
