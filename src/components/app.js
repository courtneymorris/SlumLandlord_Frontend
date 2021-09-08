import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/home";
import SignUp from "./pages/signup";
import Rules from "./pages/rules";
import Game from "./pages/game";
import GameOver from "./game-over";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
      error: "",
    };

    this.handleSetUser = this.handleSetUser.bind(this);
    this.handleSetError = this.handleSetError.bind(this);
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
          this.setState({
            error: "An error occurred... Please try again later.",
          });
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

  handleSetError(errorData) {
    this.setState({ error: errorData });
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
              render={(props) => (
                <Rules
                  {...props}
                  user={this.state.user}
                  handleSetUser={this.handleSetUser}
                  handleSetError={this.handleSetError}
                />
              )}
            />
            <Route path="/game" component={Game} />
            <Route
              path="/gameover"
              render={(props) => (
                <Game
                  {...props}
                  user={this.state.user}
                  handleSetUser={this.handleSetUser}
                />
              )}
            />
          </Switch>
        )}
        <p>{this.state.error}</p>
      </div>
    );
  }
}
