import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { signInWithGoogle, auth } from "../../firebase/firebase";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1),
    width: "100%"
  },
  button: {}
}));

type ISigninProps = {};

export default function Signin(props: ISigninProps): JSX.Element {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let classes = useStyles();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("something went wrong with login", e);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.currentTarget;

    if (target.name === "email") {
      setEmail(target.value);
    }
    if (target.name === "password") {
      setPassword(target.value);
    }
  }

  return (
    <div className="sign-in" style={{ textAlign: "center" }}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction="column"
          xs={12}
          md={10}
        >
          <Grid item xs={12} md={8}>
            <TextField
              name="email"
              label="Email"
              className={classes.input}
              type="email"
              autoComplete="current-email"
              margin="normal"
              onChange={handleChange}
              value={email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="password"
              label="Password"
              className={classes.input}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={handleChange}
              value={password}
            />
          </Grid>
          <Grid container justify="space-around">
            <Grid item xs={6} md={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            </Grid>

            <Grid item xs={6} md={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                onClick={signInWithGoogle}
              >
                Signin With Google
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
