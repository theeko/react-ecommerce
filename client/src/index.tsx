import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import "typeface-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import theme from "./MuiStyles";
import { store, persistor } from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </CssBaseline>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
