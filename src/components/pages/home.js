import React, { useState } from "react";
import Cookies from "js-cookie";

import LoginForm from "../forms/login-form";

export default function home(props) {
  if (Cookies.get("username")) {
    props.history.push("/rules");
  }
  return (
    <div className="home-wrapper">
      <h3>
        Welcome
        <br />
        to
        <br />
        Slum Landlord
      </h3>
      <LoginForm
        changeRoute={props.history.push}
        handleSetUser={props.handleSetUser}
      />
      <p>Don't have an account?</p>
      <button onClick={() => props.history.push("/signup")}>
        Create Account
      </button>
    </div>
  );
}
