import React from "react";
import { Grid } from "@mui/material";
import { useGetItemsQuery } from "../../../shared/store/api/bodyMenu/getBodyMenuApi/getBodyMenuApi";
import BurgerMenu from "./menuItems/burgerMenu/burgerMenu";
import ComboMenu from "./menuItems/comboMenu/comboMenu";
import SandvichMenu from "./menuItems/sandvichMenu/sandvichMenu";
import SnacksMenu from "./menuItems/snacksMenu/snacksMenu";
import SalatMenu from "./menuItems/salatMenu/salatMenu";
import DrinksMenu from "./menuItems/drinksMenu/drinksMenu";
import ModalMenu from "../../../features/modalMenu/modalMenu";
import {
  openModal,
  closeModal,
  selectIsModalOpen,
  selectSelectedProduct,
} from "../../../features/modalMenu/modalSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BodyMenu(props) {
  const isModalOpen = useSelector(selectIsModalOpen);
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch = useDispatch();
  const openModalHandler = (product) => {
    dispatch(openModal(product));
  };

  const closeModalHandler = () => {
    const elem = document.getElementById("modal");
    elem.classList.add("modalClose");
    setTimeout(() => {
      dispatch(closeModal());
    }, 300);
  };

  const { data, isLoading, isError } = useGetItemsQuery();

  const menuProps = {
    openModalHandler,
    closeModalHandler,
    isModalOpen,
    selectedProduct,
    openModal,
    closeModal,
    data,
    props,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch menu items</div>;
  }

  return (
    <Grid>
      <ComboMenu {...menuProps}></ComboMenu>
      <BurgerMenu {...menuProps}></BurgerMenu>
      <SandvichMenu {...menuProps}></SandvichMenu>
      <SnacksMenu {...menuProps}></SnacksMenu>
      <SalatMenu {...menuProps}></SalatMenu>
      <DrinksMenu {...menuProps}></DrinksMenu>

      {isModalOpen && <ModalMenu {...menuProps}></ModalMenu>}
    </Grid>
  );
}
