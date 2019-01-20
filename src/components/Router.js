import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import User from "./User";
import Me from "./Me";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={Book} />
        <Route path="/me" component={Me} />
        <Route path="/user/:id" component={User} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
