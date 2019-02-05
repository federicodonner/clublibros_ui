import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import User from "./User";
import Me from "./Me";
import Company from "./Company";
import UserSelect from "./UserSelect";
import NotFound from "./NotFound";

class Router extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={Book} />
          <Route path="/me" component={Me} />
          <Route path="/user/:id" component={User} />
          <Route path="/company" component={Company} />
          <Route path="/userselect" component={UserSelect} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
