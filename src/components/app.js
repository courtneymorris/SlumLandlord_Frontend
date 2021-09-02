import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import SignUp from "./signup";
import Rules from "./rules";
import Game from "./game";
import GameOver from "./game-over";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
          <Route path="/game-over" component={GameOver} />
        </Switch>
      </div>
    );
  }
}
