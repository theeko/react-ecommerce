import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import cartReducer from "./cart-reducer";
import directoryReducer from "./directory-reducer";
import shopReducer from "./shop-reducer";
// @ts-ignore
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
