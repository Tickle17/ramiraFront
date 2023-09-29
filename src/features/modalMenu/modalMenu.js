import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import "./style.css";
import BuyButton from "../../shared/ui/buyButton/buyButton";
import plus from "../../shared/img/add.png";
import minus from "../../shared/img/minus.png";

export default function ModalMenu(props) {
  const [countItems, setCountItems] = useState(1);
  const addCount = () => {
    setCountItems(countItems + 1);
  };
  const delCount = () => {
    setCountItems(countItems - 1);
  };
  const handleAddToCart = () => {
    const localData = JSON.parse(localStorage.getItem("basket")) || [];
    const currentItem = { ...props.selectedProduct, count: countItems };
    const existingItemIndex = localData.findIndex(
      (item) => item._id === currentItem._id
    );
    if (existingItemIndex !== -1) {
      localData[existingItemIndex].count += currentItem.count;
    } else {
      localData.push(currentItem);
    }
    localStorage.setItem("basket", JSON.stringify(localData));
  };

  return (
    <div id="modal" className="modal" onClick={props.closeModalHandler}>
      >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={props.closeModalHandler}>
          &times;
        </span>
        {props.selectedProduct && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={props.selectedProduct.img} alt="" />
            </Grid>
            <Grid item xs={6} className="infoModal">
              <Stack spacing={4}>
                <Grid className="titleModal">
                  {props.selectedProduct.title}
                </Grid>

                <Grid>{props.selectedProduct.price} р.</Grid>

                <Grid item xs={6} container className="countMenu">
                  <Grid item xs={6} container className="countItems">
                    <Grid item xs={4} onClick={delCount}>
                      <img src={minus} alt="minus" />
                    </Grid>
                    <Grid item xs={4}>
                      {countItems}
                    </Grid>
                    <Grid item xs={4} onClick={addCount}>
                      <img src={plus} alt="plus" />
                    </Grid>
                  </Grid>
                  <Grid item xs={5} onClick={handleAddToCart}>
                    <BuyButton
                      close={props.closeModalHandler}
                      visible={props.selectedProduct.visible}
                    ></BuyButton>
                  </Grid>
                </Grid>
                <Grid className="itemDescription">
                  {props.selectedProduct.description}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
