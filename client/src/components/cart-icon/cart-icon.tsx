import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { IShopItem } from "../../pages/Shop/Shop";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ReactComponent as ShoppingIcon } from "./shopping-icon.svg";
import { Typography } from "@material-ui/core";

import {
  selectCartItems,
  selectCartItemsCount
} from "../../redux/selectors/cart-selectors";

const useStyles = makeStyles({
  button: {}
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  // @ts-ignore
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

function CustomizedMenus({
  cartItems,
  itemCount
}: {
  cartItems: IShopItem[] | [];
  itemCount: number;
}) {
  const [anchorEl, setAnchorEl] = React.useState<React.ReactNode>(null);
  const classes = useStyles();

  function handleClick(event: React.SyntheticEvent) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <div className={`cart-icon `}>
          <ShoppingIcon className="shopping-icon" />

          <span className="item-count">{itemCount}</span>
        </div>
      </Button>

      {/* 
        // @ts-ignore */}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* 
        // @ts-ignore */}
        {cartItems.map(cartItem => {
          return (
            <StyledMenuItem key={cartItem.id}>
              <CartItem item={cartItem} />
            </StyledMenuItem>
          );
        })}
        {cartItems.length === 0 && <Typography>No Items in Cart</Typography>}
        <StyledMenuItem>
          <Button className={classes.button}>
            <Link to="/checkout">Go To Checkout</Link>
          </Button>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

// @ts-ignore
const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  null
)(CustomizedMenus);
