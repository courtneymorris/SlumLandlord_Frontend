import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <form className="signup-wrapper">
        <input
          type="text"
          placeholder="Choose a username"
          value={this.state.username}
          // onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Choose a password"
          value={this.state.password}
          // onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
