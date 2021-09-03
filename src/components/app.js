import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/home";
import SignUp from "./pages/signup";
import Rules from "./rules";
import Game from "./game";
import GameOver from "./game-over";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: Cookies.get("username") || "",
    };

    this.handleSetUser = this.handleSetUser.bind(this);
  }

  handleSetUser(userData) {
    this.setState({
      user: userData,
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} handleSetUser={this.handleSetUser} />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <SignUp {...props} handleSetUser={this.handleSetUser} />
            )}
          />
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
          <Route path="/game-over" component={GameOver} />
        </Switch>
      </div>
    );
  }
}
