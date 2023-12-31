import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import ShowModalButton from "../../../../shared/ui/shomModalMenuButton/showModalButton";

export default function DrinksMenu(props) {
  return (
    <Grid>
      <Grid item xs={12} className="titlePositions">
        <p> Напитки </p>
        <Grid container rowSpacing={10} className="menuItems">
          {props.data.menus
            .filter((item) => item.category === "drinks") //change cantegory for change items
            .map((item, index) => (
              <Grid
                item
                xs={6}
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
                    <div>{item.description}</div>
                  </Grid>
                )}
                {item.weight && item.weight !== "" && (
                  <Grid className="menuDescription" item xs={12}>
                    {item.weight} гр
                  </Grid>
                )}
                <Grid item xs={12} className="menuDescription">
                  {item.price && item.price !== "" && `${item.price} р.`}
                </Grid>
                <Grid item xs={12}>
                  <ShowModalButton visible={item.visible}></ShowModalButton>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
