import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Notiflix from "notiflix";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProductPage from "views/ProductPage/ProductPage";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/Home/Home.js";
import OrderPage from "./views/Order/OrderPage";
import store from "./store/store";
// redux
Notiflix.Notify.Init({
  position:'right-bottom'
});
var hist = createBrowserHistory();

ReactDOM.render(
 <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage}/>

{/*      <Route path="/product-page/:id" component={ProductPage} />*/}
      <Route path="/product-page/:id" render={(props) =>(
          <ProductPage {...props} />
      )}
      />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/home" component={Components} />
      <Route path="/finalizeazComanda" component={OrderPage} />
      <Route path="/" component={HomePage} />
>
    </Switch>
  </Router>
 </Provider>,
document.getElementById("root")
);
