import React, { Component } from "react";
import Cookies from "js-cookie";

import loading from "../../../static/assets/loading.gif";

export default class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      this.setState({ error: "Please fill out all fields" });
    } else {
      this.setState({
        loading: true,
        error: "",
      });

      fetch("http://127.0.0.1:5000/user/verification", {
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

          if (data === "User NOT Verified") {
            this.setState({ error: "Invalid username or password " });
          } else {
            this.props.handleSetUser(data);
            Cookies.set("username", this.state.username);
            this.props.changeRoute("/rules");
          }
        })
        .catch((error) => {
          console.log("Error logging in", error);
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
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
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
        <button type="submit" disabled={this.state.loading}>
          Login
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
