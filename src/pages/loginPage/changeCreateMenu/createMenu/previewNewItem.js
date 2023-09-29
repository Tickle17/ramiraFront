import React from "react";
import { Grid } from "@mui/material";
import BuyButton from "../../../../shared/ui/buyButton/buyButton";

export default function PreviewNewItem(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      container
      spacing={2}
      className="menuItem"
      style={{ pointerEvents: "none" }}
    >
      <Grid className="menuTitle" item xs={12}>
        {props.editedItem.category}
      </Grid>
      <Grid item xs={12}>
        <img src={props.editedItem.img} alt="" />
      </Grid>
      <Grid className="menuTitle" item xs={12}>
        {props.editedItem.title}
      </Grid>
      {props.editedItem.description && props.editedItem.description !== "" && (
        <Grid className="menuDescription" item xs={12}>
          {props.editedItem.description}
        </Grid>
      )}
      {props.editedItem.weight && props.editedItem.weight !== "" && (
        <Grid className="menuDescription" item xs={12}>
          {props.editedItem.weight} гр
        </Grid>
      )}
      <Grid item xs={12} className="menuDescription">
        {props.editedItem.price} р.
      </Grid>
      <Grid item xs={12}>
        <BuyButton visible={props.editedItem.visible}></BuyButton>
      </Grid>
    </Grid>
  );
}
