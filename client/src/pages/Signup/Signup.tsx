import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

interface ISignupProps {}

export default function Signup(props: ISignupProps): JSX.Element {
  const [displayName, setDisplayName] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const classes = useStyles();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "displayName":
        setDisplayName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        console.log("not a name we know of");
        break;
    }
  }

  return (
    <div className="sign-in" style={{ textAlign: "center" }}>
      <h2>Register a new account</h2>
      <span>Register your new account</span>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4} alignItems="center" direction="column">
          <Grid item xs={12} md={8}>
            <TextField
              label="Display Name"
              className={classes.input}
              type="text"
              margin="normal"
              onChange={handleChange}
              value={displayName}
              name="displayName"
            />
          </Grid>

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

          <Grid item xs={12} md={8}>
            <TextField
              name="password"
              label="Password"
              className={classes.input}
              type="password"
              margin="normal"
              onChange={handleChange}
              value={password}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              className={classes.input}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={handleChange}
              value={confirmPassword}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
