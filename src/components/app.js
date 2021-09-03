import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import SignUp from "./signup";
import Rules from "./rules";
import Game from "./game";
import GameOver from "./game-over";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
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
          <Route path="/signup" component={SignUp} />
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
          <Route path="/game-over" component={GameOver} />
        </Switch>
      </div>
    );
  }
}
