import { createSelector } from "reselect";

const selectCart = state => state.cart; //inputSelector: returns piece of state

//usage-> mapStateToProps-> cartItems: selectCartItems(state)
export const selectCartItems = createSelector(
  [selectCart], //array of input selectors
  cart => cart.cartItems //args of func: input selectors in order
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => {
    return cartItems.reduce(
      (acc, cartItem) => acc + (cartItem.quantity ? cartItem.quantity : 1),
      0
    );
  }
);

export const selectCartTotal = createSelector(
  selectCartItems,
  cartItems => {
    return cartItems.reduce((acc, cartItem) => {
      let quantity = cartItem.quantity ? cartItem.quantity : 1;
      return acc + cartItem.price * quantity;
    }, 0);
  }
);
