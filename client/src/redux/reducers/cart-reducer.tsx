import { CartActionTypes } from "../actions/actionTypes";
import { addItemToCart } from "../actions/cartActions";

import { IShopItem } from "../../pages/Shop/Shop";

const initialState = {
  cartItems: []
};

type ActionTypes = {
  type: string;
  payload?: IShopItem;
};

type StateProps = {
  cartItems: IShopItem[] | [];
};

export default (
  state: StateProps = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload as any)
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        //payload is id here
        // @ts-ignore
        cartItems: state.cartItems.filter(item => item.id !== payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        //changed payload from item to id
        // @ts-ignore
        cartItems: state.cartItems.map(cartItem => {
          if (cartItem.id === payload) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
      };
    default:
      return state;
  }
};
