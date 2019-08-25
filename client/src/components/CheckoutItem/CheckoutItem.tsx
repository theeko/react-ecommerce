import React from "react";
import "./checkout-item-style.scss";
import { IShopItem } from "../../pages/Shop/Shop";
import {
  clearItem,
  removeOrClear,
  addItem
} from "../../redux/actions/cartActions";
import { connect } from "react-redux";

function CheckoutItem(
  props: { item: IShopItem } & {
    removeItem(id: number): any;
    dispatch(arg: any): any;
  }
): JSX.Element {
  const { name, imageUrl, quantity, price, id } = props.item;
  console.log(props.item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => props.dispatch(removeOrClear(id))}
        >
          {" "}
          &#10094;
        </span>
        <span className="value">{quantity ? quantity : 1}</span>
        <span
          className="arrow"
          onClick={() => props.dispatch(addItem(props.item))}
        >
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => {
          props.dispatch(clearItem(id));
        }}
      >
        &#10005;
      </span>
    </div>
  );
}

export default connect(null)(CheckoutItem);
