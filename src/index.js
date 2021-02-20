import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/Home/Home.js";
import Home2 from "views/Home/Home2"
// redux
import {configureStore} from "store/store.js";



var hist = createBrowserHistory();

ReactDOM.render(
 <Provider store={configureStore()}>
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/home" component={Components} />
      <Route path="/" component={Home2} />

>
    </Switch>
  </Router>
 </Provider>,
document.getElementById("root")
);
