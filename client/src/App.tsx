import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/user.actions";
import Home from "./pages/Home/Home";
import ShopPage from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/header/Header";
import SignUpAndSignIn from "./pages/SignUpAndSignIn/SignUpAndSignIn";

import { selectCurrentUser } from "./redux/selectors/user-selectors.js";

type AppProps = {
  setCurrentUser(user: any): { type: string; payload: any };
  currentUser: {};
};

let useStyles = makeStyles({
  grid: {
    padding: "20px 80px"
  }
});

const App = ({ setCurrentUser, currentUser }: AppProps): JSX.Element => {
  let classes = useStyles();

  useEffect(() => {
    let unsubAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef &&
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubAuth();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Grid container className={classes.grid} direction="column">
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={Checkout} />
            <Route
              exact
              path="/signin"
              render={props =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignUpAndSignIn {...props} />
                )
              }
            />
          </Switch>
        </div>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
