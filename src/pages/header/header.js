import React from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
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

  return (
    <Grid container className="header">
      {isSmallScreen ? (
        <Grid container className="header">
          <Grid item xs={4} className="title">
            <NavLink to={"/"}>Ramira</NavLink>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid container item xs={3} style={{ alignItems: "center" }}>
            <Grid container justifyContent="flex-end" item xs={6}>
              <button onClick={openModalHandler}>
                <FaShoppingCart />
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
            xs={3}
            justifyContent="flex-end"
            style={{ alignItems: "center" }}
          >
            <Grid
              container
              justifyContent="flex-end"
              item
              xs={6}
              onClick={() => openModalHandler()}
            >
              <FaShoppingCart />
            </Grid>
          </Grid>
        </Grid>
      )}
      {isBasketModalOpen && <ModalBasket {...modalProps}></ModalBasket>}
    </Grid>
  );
}
