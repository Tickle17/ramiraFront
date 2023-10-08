import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import ShowModalButton from "../../../../shared/ui/shomModalMenuButton/showModalButton";

function BurgerMenu(props) {
  return (
    <Grid ref={props.props.burgerRef}>
      <Grid item xs={12} className="titlePositions">
        <p> Бургеры</p>
        <Grid container rowSpacing={10} className="menuItems">
          {props.data.menus
            .filter((item) => item.category === "burgers") //change cantegory for change items
            .map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                container
                spacing={1}
                className="menuItem"
                key={index}
                onClick={() => props.openModalHandler(item)}
              >
                <Grid item xs={12}>
                  <img src={item.img} alt="" />
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
                  {item.price} р.
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

export default BurgerMenu;
