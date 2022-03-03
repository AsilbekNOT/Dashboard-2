export const cardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return [...state, action.payload];
    case "INCREMENT":
      return state.map((value, index) => {
        if (index === action.payload) {
          value.chosen++;
        }
        return value;
      });
    case "DECREMENT":
      return state.map((value, index) => {
        if (index === action.payload) {
          value.chosen--;
        }
        return value;
      });
    case "DELETE_CARD":
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
};
