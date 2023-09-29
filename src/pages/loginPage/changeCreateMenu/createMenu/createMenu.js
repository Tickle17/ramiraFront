import React, { useEffect, useState } from "react";
import Header from "../../../header/header";
import { updateEditedItem } from "./createMenuSlice";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import PreviewNewItem from "./previewNewItem";
import "./style.css";
import { useSaveMenuDataMutation } from "../../../../shared/store/api/api";
export default function CreateMenu() {
  const dispatch = useDispatch();
  const [editedItem, setEditedItem] = useState({
    img: "",
    title: "",
    description: "",
    price: 0,
    category: "",
    visible: false,
    weight: 0,
  });

  const [access, setAccess] = useState(false);

  const [saveMenuData, { data, error, isLoading }] = useSaveMenuDataMutation();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (
      localToken ===
      "98bd5806929b8e6cadd4ffd3d79afa893c3e30f43d934481bd3f37273689edb2"
    ) {
      setAccess(true);
    }
  }, []);

  const updateField = (field, value) => {
    setEditedItem({
      ...editedItem,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await saveMenuData(editedItem);
      console.log(result.data.message);
      if (result.data.message === "completed") {
        alert("Данные успешно сохранены!");
        dispatch(updateEditedItem(result.data));
        window.location.reload();
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Такой товар уже есть или другая ошибка</div>;
  }
  return (
    <div>
      <Header></Header>
      {access ? (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="createMenu">
              <label htmlFor="">Картинка URL:</label>
              <input
                type="text"
                value={editedItem.img}
                onChange={(e) => updateField("img", e.target.value)}
              />
            </div>
            <div className="createMenu">
              <label htmlFor="">Название:</label>
              <input
                type="text"
                value={editedItem.title}
                onChange={(e) => updateField("title", e.target.value)}
              />
            </div>
            <div className="createMenu">
              <label htmlFor="">Описание:</label>
              <textarea
                type="text"
                value={editedItem.description}
                onChange={(e) => updateField("description", e.target.value)}
                style={{ height: "100px", width: "30%" }}
              />
            </div>
            <div className="createMenu">
              <label htmlFor="">Цена:</label>
              <input
                type="number"
                value={editedItem.price}
                onChange={(e) => updateField("price", e.target.value)}
              />
            </div>
            <div className="createMenu">
              <label htmlFor="">Категория:</label>
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
            <div className="createMenu">
              <label htmlFor="">Наличие:</label>
              <input
                type="checkbox"
                checked={editedItem.visible}
                onChange={(e) => updateField("visible", e.target.checked)}
              />{" "}
            </div>
            <div className="createMenu">
              <label>Вес:</label>
              <input
                type="number"
                value={editedItem.weight}
                onChange={(e) => updateField("weight", e.target.value)}
              />
            </div>
            <div className="createMenu">
              <button
                style={{ background: "white", color: "black" }}
                type="submit"
              >
                Отправить
              </button>
            </div>
          </form>
          <Grid>
            <PreviewNewItem editedItem={editedItem}></PreviewNewItem>
          </Grid>
        </div>
      ) : (
        <div>Не авторизован</div>
      )}
    </div>
  );
}
