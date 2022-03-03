export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return state.filter((value, index) => index !== action.payload);
    case "UPDATE_PRODUCT":
      return state.map((value, index) => {
        if (index === action.payload.index) {
          return action.payload.product;
        }
        return value;
      });
    default:
      return state;
  }
};
