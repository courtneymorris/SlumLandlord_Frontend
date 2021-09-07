import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/home";
import SignUp from "./pages/signup";
import Rules from "./pages/rules";
import Game from "./game";
import GameOver from "./game-over";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
    };

    this.handleSetUser = this.handleSetUser.bind(this);
  }

  componentDidMount() {
    if (Cookies.get("username")) {
      fetch(`http://127.0.0.1:5000/user/get/${Cookies.get("username")}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ user: data, loading: false });
        })
        .catch((error) => {
          console.log("Error getting user data", error);
          this.setState({ loading: false });
        });
    } else {
      this.setState({ loading: false });
    }
  }

  handleSetUser(userData) {
    this.setState({
      user: userData,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
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
            <Route
              path="/rules"
              render={(props) => <Rules {...props} user={this.state.user} />}
            />
            <Route path="/game" component={Game} />
            <Route path="/gameover" component={GameOver} />
          </Switch>
        )}
      </div>
    );
  }
}
