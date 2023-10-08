import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import ShowModalButton from "../../../../shared/ui/shomModalMenuButton/showModalButton";

export default function SnacksMenu(props) {
  return (
    <Grid ref={props.props.snacksRef}>
      <Grid item xs={12} className="titlePositions">
        <p> Закуски </p>
        <Grid container rowSpacing={10} className="menuItems">
          {props.data.menus
            .filter((item) => item.category === "snacks") //change cantegory for change items
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
                <Grid className="menuDescription" item xs={12}>
                  <div>{item.description}</div>
                </Grid>
                <Grid className="menuDescription" item xs={12}>
                  {item.weight && `${item.weight} гр`}
                </Grid>
                <Grid item xs={12} className="menuDescription">
                  {item.price && `${item.price} р.`}
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
