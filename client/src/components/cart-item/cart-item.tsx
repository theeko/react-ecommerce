import React from "react";
import "./cart-item-styles.scss";

import { IShopItem } from "../../pages/Shop/Shop";

export default function CartItem({
  item: { imageUrl, name, price, quantity }
}: {
  item: IShopItem;
}) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity ? quantity : 1} x {price}
        </span>
      </div>
    </div>
  );
}
