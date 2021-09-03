import React, { Component } from "react";
import Cookies from "js-cookie";

import loading from "../../../static/assets/loading.gif";

export default class SignUpForm extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
      error: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.passwordConfirm === ""
    ) {
      this.setState({ error: "Please fill out all fields" });
    } else if (this.state.password != this.state.passwordConfirm) {
      this.setState({ error: "Passwords do not match!" });
    } else {
      this.setState({
        loading: true,
        error: "",
      });

      fetch("http://127.0.0.1:5000/user/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          this.setState({ loading: false });
        })
        .catch((error) => {
          console.log("Error adding user", error);
          this.setState({
            loading: false,
            error: "An error occurred. Please try again later.",
          });
        });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="signup-wrapper" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={this.state.passwordConfirm}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={this.state.loading}>
          Sign Up
        </button>
        <p>{this.state.error}</p>
        {this.state.loading ? (
          <img src={loading} />
        ) : (
          <div className="spacer" />
        )}
      </form>
    );
  }
}
