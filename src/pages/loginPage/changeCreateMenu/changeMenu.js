import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import axios from "axios";
import "./style.css";
import { useDelMenuItemMutation } from "../../../shared/store/api/api";

export default function ChangeMenu(props) {
  const [editing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);

  const changeEditing = () => {
    setEditing(!editing);
  };

  const updateField = (field, value) => {
    setEditedItem({
      ...editedItem,
      [field]: value,
    });
  };

  const editItem = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://dornetshop.ru/menu/updateMenuItem`,
        editedItem
      );
      if (response.status === 200) {
        alert("Данные успешно сохранены!");
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
    }
  };
  const [idItem] = useDelMenuItemMutation();

  const delItem = async (e) => {
    e.preventDefault();
    try {
      const result = window.confirm("Вы уверены, что хотите продолжить?");

      if (result) {
        const res = await idItem({ _id: props.item._id });
        if (res.data.message === "completed") {
          alert("Товар удален");
          window.location.reload();
        }
      } else {
        return;
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
    }
  };

  return (
    <Grid className="changeItemMenu">
      {editing ? (
        <form onSubmit={editItem}>
          <Stack>
            <label>Изображение:</label>
            <input
              type="text"
              value={editedItem.img}
              onChange={(e) => updateField("img", e.target.value)}
            />
          </Stack>
          <Stack>
            <label>Заголовок:</label>
            <input
              type="text"
              value={editedItem.title}
              onChange={(e) => updateField("title", e.target.value)}
            />
          </Stack>
          <Stack>
            <label>Описание:</label>
            <input
              type="text"
              value={editedItem.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </Stack>
          <Stack>
            <label>Наличие:</label>
            <input
              type="checkbox"
              checked={editedItem.visible}
              onChange={(e) => updateField("visible", e.target.checked)}
            />
          </Stack>
          <Stack>
            <label>Цена:</label>
            <input
              type="number"
              value={editedItem.price}
              onChange={(e) => updateField("price", e.target.value)}
            />
          </Stack>
          <Stack>
            <label>Вес:</label>
            <input
              type="number"
              value={editedItem.weight}
              onChange={(e) => updateField("weight", e.target.value)}
            />
          </Stack>

          <Stack>
            <label htmlFor="category">Категория:</label>
            <select
              id="category"
              value={editedItem.category}
              onChange={(e) => updateField("category", e.target.value)}
            >
              <option value="combo">Комбо</option>
              <option value="burgers">Бургеры</option>
              <option value="sandwich">Сэндвичи</option>
              <option value="snacks">Закуски</option>
              <option value="salat">Салаты</option>
              <option value="drinks">Напитки</option>
            </select>
          </Stack>
          <button type="submit">Сохранить</button>
          <button onClick={changeEditing}>Закрыть</button>
        </form>
      ) : (
        <Grid container item xs={12} className="menuItems">
          {[props.item].map((item, index) => (
            <Grid container item xs={12} className="menuItem" key={index}>
              <Grid item xs={12}>
                <img src={item.img} alt="" />
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
                {item.price} р.
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <button onClick={changeEditing}> Редактировать</button>
          </Grid>
          <Grid item xs={12}>
            <button onClick={delItem}> Удалить </button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
