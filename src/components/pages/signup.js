import React, { Component } from "react";
import Cookies from "js-cookie";

import SignUpForm from "../forms/signup-form";

export default function SignUp(props) {
  if (Cookies.get("username")) {
    props.history.push("/rules");
  }
  return (
    <div className="signup-wrapper">
      <SignUpForm
        changeRoute={props.history.push}
        handleSetUser={props.handleSetUser}
      />
      <p>Already have an account?</p>
      <button onClick={() => props.history.push("/")}>Log In</button>
    </div>
  );
}
