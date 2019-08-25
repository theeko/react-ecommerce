import React from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-icon.svg";
import styled from "styled-components";

function CartIcon({ className }: any) {
  return (
    <div className={`cart-icon ${className}`}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default styled(CartIcon)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;
