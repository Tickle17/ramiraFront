import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import BuyButton from "../../../../../shared/ui/buyButton/buyButton";

export default function SandvichMenu(props) {
  return (
    <Grid ref={props.props.sandwichRef}>
      <Grid item xs={12} className="titlePositions">
        <p> Сэндвичи </p>
        <Grid container className="menuItems">
          {props.data.menus
            .filter((item) => item.category === "sandvich") //change cantegory for change items
            .map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                container
                spacing={2}
                className="menuItem"
                key={index}
                onClick={() => props.openModalHandler(item)}
              >
                <Grid item xs={12}>
                  {item.img && <img src={item.img} alt="" />}
                </Grid>
                <Grid className="menuTitle" item xs={12}>
                  {item.title}
                </Grid>
                {item.description && item.description !== "" && (
                  <Grid className="menuDescription" item xs={12}>
                    {item.description}
                  </Grid>
                )}
                {item.weight && item.weight !== "" && (
                  <Grid className="menuDescription" item xs={12}>
                    {item.weight} гр
                  </Grid>
                )}
                <Grid item xs={12} className="menuDescription">
                  {item.price && `${item.price} р.`}
                </Grid>
                <Grid item xs={12}>
                  <BuyButton visible={item.visible}></BuyButton>
                </Grid>{" "}
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
