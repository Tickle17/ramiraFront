import React, { useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import "./style.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5001/menu/updateMenuItem`,
        editedItem
      );
      // console.log(editedItem);
      if (response.status === 200) {
        alert("Данные успешно сохранены!");
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
    }
  };

  return (
    <Grid className="changeItemMenu">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Изображение:</label>
            <input
              type="text"
              value={editedItem.img}
              onChange={(e) => updateField("img", e.target.value)}
            />
          </div>
          <div>
            <label>Заголовок:</label>
            <input
              type="text"
              value={editedItem.title}
              onChange={(e) => updateField("title", e.target.value)}
            />
          </div>
          <div>
            <label>Описание:</label>
            <input
              type="text"
              value={editedItem.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </div>
          <div>
            <label>Наличие:</label>
            <input
              type="checkbox"
              checked={editedItem.visible}
              onChange={(e) => updateField("visible", e.target.checked)}
            />
          </div>
          <div>
            <label>Цена:</label>
            <input
              type="number"
              value={editedItem.price}
              onChange={(e) => updateField("price", e.target.value)}
            />
          </div>
          <div>
            <label>Вес:</label>
            <input
              type="number"
              value={editedItem.weight}
              onChange={(e) => updateField("weight", e.target.value)}
            />
          </div>

          <div>
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
          </div>
          <button type="submit">Сохранить</button>
          <button onClick={changeEditing}>Закрыть</button>
        </form>
      ) : (
        <Grid>
          <Grid container item xs={12} className="menuItems">
            {[props.item].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                container
                spacing={2}
                className="menuItem"
                key={index}
              >
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
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
