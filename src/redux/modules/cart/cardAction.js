export const addToCard = (product) => ({
  type: "ADD_TO_CARD",
  payload: product,
});

export const increment = (index) => ({
  type: "INCREMENT",
  payload: index,
});

export const decrement = (index) => ({
  type: "DECREMENT",
  payload: index,
});

export const deleteCard = (index) => ({
  type: "DELETE_CARD",
  payload: index,
});
