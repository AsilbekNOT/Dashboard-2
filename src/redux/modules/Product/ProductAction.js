export const addAction = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const deleteProduct = (index) => ({
  type: "DELETE_PRODUCT",
  payload: index,
});

export const updateProduct = (index, product) => ({
  type: "UPDATE_PRODUCT",
  payload: { index, product },
});
