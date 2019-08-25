import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/selectors/cart-selectors.js";
import { IShopItem } from "../Shop/Shop";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

interface ICheckoutProps {
  cartItems: IShopItem[] | [];
  total: number;
}

function Checkout({ cartItems, total }: ICheckoutProps) {
  return (
    <React.Fragment>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {/*
        // @ts-ignore */}
        {cartItems.map(cartItem => (
          // @ts-ignore
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <div className="total">
          <span>Total: ${total}</span>
        </div>
        <div className="test-warning">
          *Please use the following test credit cart for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeButton price={total} />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps,
  null
)(Checkout);
