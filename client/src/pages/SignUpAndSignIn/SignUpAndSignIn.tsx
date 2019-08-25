import React from "react";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps } from "react-router";

import SignIn from "../Signin/Signin";
import SignUp from "../Signup/Signup";

type SignUpAndSignInProps = {};

export default function SignUpAndSignIn(
  props: Partial<SignUpAndSignInProps & RouteComponentProps>
) {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <SignIn />
      </Grid>
      <Grid item md={6} xs={12}>
        <SignUp />
      </Grid>
    </Grid>
  );
}
