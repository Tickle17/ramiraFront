import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addClientData, clearBasket } from "../basketSlice/basketSlice";
import { useSendOrderMutation } from "../../../shared/store/api/api";

export default function ModalBasketForm(props) {
  const dispatch = useDispatch();
  const [isFormValid, setIsFormValid] = useState(false);
  const globalStateData = useSelector((state) => state.basket);
  const [sendOrderTelegram, { isLoading, isError, isSuccess, data, error }] =
    useSendOrderMutation();

  useEffect(() => {
    if (
      globalStateData.clientData.Name &&
      globalStateData.clientData.Phone &&
      globalStateData.clientData.Address &&
      globalStateData.clientData.HouseNumber
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    globalStateData.clientData.Name,
    globalStateData.clientData.Phone,
    globalStateData.clientData.Address,
    globalStateData.clientData.HouseNumber,
  ]);

  const sendOrder = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    const orderDetails = props.basketItems.map((item) => {
      const totalPriceForPosition = item.count * item.price;
      return `${item.title} - ${item.count} шт (${item.count} шт * ${item.price} = ${totalPriceForPosition})`;
    });

    const clientDetails = `Адрес клиента:
Имя: ${globalStateData.clientData.Name},
Телефон: ${globalStateData.clientData.Phone},
Адрес: ${globalStateData.clientData.Address},
Номер дома: ${globalStateData.clientData.HouseNumber},
Номер квартиры: ${globalStateData.clientData.AppartNumber},
Номер подъезда: ${globalStateData.clientData.EntranceNum},
Комментарий: ${globalStateData.clientData.Comments}`;

    const orderSummary = `Новый заказ:\n${orderDetails.join(
      "\n"
    )}\n\n${clientDetails}\n\nСумма заказа: ${props.totalAmount} р.`;

    sendOrderTelegram({ orderData: orderSummary })
      .unwrap()
      .then((response) => {
        console.log("Заказ успешно отправлен:", response);
        localStorage.removeItem("basket");
        dispatch(clearBasket());
      })
      .catch((err) => {
        console.error("Ошибка отправки заказа:", err);
      });
  };
  if (isSuccess) {
    return <div>Спасибо за оформленный заказ</div>;
  }
  return (
    <Stack className="userData">
      <form onSubmit={sendOrder}>
        <Stack
          className={`dataItem ${
            !globalStateData.clientData.Name ? "error" : ""
          }`}
        >
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            placeholder="Иван Иванов"
            required
            onChange={(e) => dispatch(addClientData({ Name: e.target.value }))}
          />
        </Stack>
        <Stack
          className={`dataItem ${
            !globalStateData.clientData.Phone ? "error" : ""
          }`}
        >
          <label htmlFor="phone"> Ваш телефон</label>
          <input
            type="text"
            id="phone"
            placeholder="89991112233"
            required
            onChange={(e) => dispatch(addClientData({ Phone: e.target.value }))}
          />
        </Stack>
        <Stack
          className={`dataItem ${
            !globalStateData.clientData.Address ? "error" : ""
          }`}
        >
          <label htmlFor="address"> Ваш адрес</label>
          <input
            type="text"
            id="address"
            placeholder="улица Иванова"
            required
            onChange={(e) =>
              dispatch(addClientData({ Address: e.target.value }))
            }
          />
        </Stack>
        <Stack
          className={`dataItem ${
            !globalStateData.clientData.HouseNumber ? "error" : ""
          }`}
        >
          <label htmlFor="houseNum"> Номер дома</label>
          <input
            type="text"
            id="houseNum"
            placeholder="1"
            required
            onChange={(e) =>
              dispatch(addClientData({ HouseNumber: e.target.value }))
            }
          />
        </Stack>
        <Stack className="dataItem">
          <label htmlFor="appartNum"> Номер квартиры</label>
          <input
            type="text"
            id="appartNum"
            placeholder="1"
            onChange={(e) =>
              dispatch(addClientData({ AppartNumber: e.target.value }))
            }
          />
        </Stack>
        <Stack className="dataItem">
          <label htmlFor="entranceNum"> Номер подъезда</label>
          <input
            type="text"
            id="entranceNum"
            placeholder="1"
            onChange={(e) =>
              dispatch(addClientData({ EntranceNum: e.target.value }))
            }
          />
        </Stack>
        <Stack className="dataItem">
          <label htmlFor="comment"> Комментарий к заказу</label>
          <textarea
            id="comment"
            placeholder="Домофон не работает, пусть курьер позвонит когда приедет, я выйду"
            onChange={(e) =>
              dispatch(addClientData({ Comments: e.target.value }))
            }
          />
        </Stack>
        <button type="submit">
          {isLoading ? "Отправка заказа..." : "Отправить данные"}
        </button>
      </form>
    </Stack>
  );
}
