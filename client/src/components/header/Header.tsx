import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { auth } from "../../firebase/firebase";
import { ReactComponent as Logo } from "./crown.svg";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/user-selectors.js";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  links: {
    padding: 10,
    margin: "0 25px"
  },
  logo: {
    width: 50,
    height: 50
  }
}));

interface HeaderProps {
  currentUser?: {} | null;
}

function Header({ currentUser }: any): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <NavLink to="/">
                  <Logo style={{ width: 40, height: 40 }} />
                </NavLink>
              </IconButton>
            </Grid>
            <Grid item>
              <Button color="inherit">
                <NavLink to="/shop">Shop</NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/contact">Contact</NavLink>
              </Button>

              <Button color="inherit">
                {currentUser ? (
                  <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                  </div>
                ) : (
                  <NavLink to="/signin">SIGN IN </NavLink>
                )}
              </Button>
              <Button color="inherit">
                <CartIcon />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

type MapState = {
  user: {
    currentUser: {} | null;
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  {}
)(Header);
