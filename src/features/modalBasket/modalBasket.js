import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import "./style.css";
import add_item from "../../shared/img/add_Item.svg";
import minus_item from "../../shared/img/minus_item.svg";
import remove_item from "../../shared/img/remove_item.svg";
import {
  increaseItemCount,
  decreaseItemCount,
  removeItem,
  getTotalPrice,
} from "./modalFeature/modalFunc";
import ModalBasketForm from "./modalFeature/modalBasketForm";
import { useDispatch } from "react-redux";
import { clearBasket } from "./basketSlice/basketSlice";
export default function ModalBasket(props) {
  const [basketItems, setBasketItems] = useState([]);
  const dispatch = useDispatch();
  const increaseItemCountHandler = (itemIndex) => {
    increaseItemCount(basketItems, itemIndex, setBasketItems);
  };

  const decreaseItemCountHandler = (itemIndex) => {
    decreaseItemCount(basketItems, itemIndex, setBasketItems);
  };

  const removeItemHandler = (itemIndex) => {
    removeItem(basketItems, itemIndex, setBasketItems);
    console.log(basketItems);
    if (basketItems.length <= 1) {
      dispatch(clearBasket());
    }
  };

  const totalAmount = getTotalPrice(basketItems);

  useEffect(() => {
    const localStorageData = localStorage.getItem("basket");
    const parsedData = JSON.parse(localStorageData);
    setBasketItems(parsedData || []);
  }, []);

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modalBasket")) {
      props.closeModalHandler();
    }
  };
  const orderInfoProps = {
    basketItems,
    totalAmount,
    handleModalClick,
  };

  return (
    <div id="modalBasket" className="modalBasket" onClick={handleModalClick}>
      <Grid className="modalContent">
        <Stack>
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Grid className="titleBasketModal">Ваш заказ:</Grid>
            </Grid>
            <Grid item xs={1}>
              <span
                style={{ cursor: "pointer", fontSize: "30px" }}
                onClick={props.closeModalHandler}
              >
                &times;
              </span>
            </Grid>
          </Grid>
          <Grid className="menuData">
            {basketItems.map((item, index) => (
              <Grid
                key={item._id}
                container
                className="menuDataItem"
                justifyContent="space-between"
              >
                <Grid item xs={2}>
                  <img src={item.img} alt="" />
                </Grid>

                <Grid item xs={4} className="menuDataTitle">
                  <Grid> {item.title}</Grid>
                  <Grid className="menuDataRare">{item.options}</Grid>
                </Grid>

                <Grid container item xs={2}>
                  <Grid item xs={4}>
                    <button onClick={() => decreaseItemCountHandler(index)}>
                      <img className="icon" src={minus_item} alt="minus" />
                    </button>
                  </Grid>
                  <Grid item xs={4}>
                    {item.count}
                  </Grid>
                  <Grid item xs={4}>
                    <button onClick={() => increaseItemCountHandler(index)}>
                      <img className="icon" src={add_item} alt="add" />
                    </button>
                  </Grid>
                </Grid>

                <Grid item xs={2}>
                  {item.count * item.price} р.
                </Grid>

                <Grid item xs={1}>
                  <button onClick={() => removeItemHandler(index)}>
                    <img className="icon" src={remove_item} alt="remove" />
                  </button>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid className="totalPrice_info">
            <div>Сумма: {totalAmount} р.</div>
          </Grid>
          <ModalBasketForm {...orderInfoProps}></ModalBasketForm>
        </Stack>
      </Grid>
    </div>
  );
}
