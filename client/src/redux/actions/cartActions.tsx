import { CartActionTypes } from "./actionTypes";

import { IShopItem } from "../../pages/Shop/Shop";

export const addItemToCart = (
  cartItems: IShopItem[],
  cartItemToAdd: IShopItem
) => {
  const exisingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exisingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1
          }
        : cartItem
    );
  }

  return [...cartItems, cartItemToAdd];
};

export const removeOrClear = (id: number) => (dispatch: any, getState: any) => {
  let cartItems = getState().cart.cartItems;
  let item = cartItems.find((item: IShopItem) => item.id === id);
  console.log(item);
  if (!item) return "no item bish";
  if (item.quantity === 1 || !item.quantity) {
    dispatch(clearItem(id));
  } else {
    dispatch(removeItem(id));
  }
};

export const addItem = (item: IShopItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItem = (id: number) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: id
});

export const removeItem = (id: number) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
});
