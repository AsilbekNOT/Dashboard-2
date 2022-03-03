import { combineReducers } from "redux";
import { cardReducer } from "../modules/cart/cardReducer";
import { productReducer } from "../modules/Product/ProductReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  card: cardReducer,
});
