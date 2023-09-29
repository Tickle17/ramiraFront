// basketFunctions.js
export const increaseItemCount = (basketItems, itemIndex, setBasketItems) => {
  const updatedBasketItems = [...basketItems];
  updatedBasketItems[itemIndex].count += 1;
  setBasketItems(updatedBasketItems);
  updateLocalStorage(updatedBasketItems);
};

export const decreaseItemCount = (basketItems, itemIndex, setBasketItems) => {
  const updatedBasketItems = [...basketItems];
  if (updatedBasketItems[itemIndex].count > 1) {
    updatedBasketItems[itemIndex].count -= 1;
    setBasketItems(updatedBasketItems);
    updateLocalStorage(updatedBasketItems);
  }
};

export const removeItem = (basketItems, itemIndex, setBasketItems) => {
  const updatedBasketItems = [...basketItems];
  updatedBasketItems.splice(itemIndex, 1);
  setBasketItems(updatedBasketItems);
  updateLocalStorage(updatedBasketItems);
};

export const getTotalPrice = (basketItems) => {
  return basketItems.reduce(
    (total, item) => total + item.count * item.price,
    0
  );
};

export const updateLocalStorage = (items) => {
  localStorage.setItem("basket", JSON.stringify(items));
};
