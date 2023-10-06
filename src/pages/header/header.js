import React from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as BurgerMenu } from "../../shared/img/burgerMenu.svg";
import { ReactComponent as Profile } from "../../shared/img/profile.svg";
import { ReactComponent as Plus } from "../../shared/img/createNewItem.svg";

import basket from "../../shared/img/basket.png";
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
import { selectIsAuthenticated } from "../../features/authSlice/authSlice";

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

  return (
    <Grid container className="header">
      {isSmallScreen ? (
        <Grid container className="header">
          <Grid item xs={4} className="title">
            <a href="/">Ramira</a>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid container item xs={3} style={{ alignItems: "center" }}>
            <Grid container justifyContent="flex-end" item xs={6}>
              <button onClick={openModalHandler}>
                <img src={basket} alt="" />
              </button>
            </Grid>
            <Grid container justifyContent="flex-end" item xs={6}>
              <button onClick={openBurger}>
                <FaBars />
              </button>
            </Grid>
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
            <Grid container item xs={7}></Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              item
              xs={4}
            >
              {isAuthenticated ? (
                <Grid container>
                  <Grid container item xs={2}>
                    <NavLink to="/login/create">
                      <Plus></Plus>
                    </NavLink>
                  </Grid>
                  <Grid container item xs={2} alignItems="center">
                    <NavLink to="/login">
                      <Profile></Profile>
                    </NavLink>
                  </Grid>

                  <Grid
                    container
                    item
                    xs={4}
                    onClick={() => openModalHandler()}
                  >
                    <img
                      style={{ width: "48px", height: "48px" }}
                      src={basket}
                      alt="Корзина"
                    />
                  </Grid>
                  <Grid container item xs={4}>
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
                    <img
                      style={{ width: "48px", height: "48px" }}
                      src={basket}
                      alt="Корзина"
                    />
                  </Grid>
                  <Grid container item xs={6}>
                    <button onClick={openBurger}>
                      <BurgerMenu></BurgerMenu>
                    </button>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid container item xs={1}></Grid>
          </Grid>
        </Grid>
      )}
      {isBasketModalOpen && <ModalBasket {...modalProps}></ModalBasket>}
    </Grid>
  );
}
