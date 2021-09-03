import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import LoginForm from "../forms/login-form";

export default function home(props) {
  return (
    <div className="home-wrapper">
      <h1>Home</h1>
      <LoginForm
        changeRoute={props.history.push}
        handleSetUser={props.handleSetUser}
      />
    </div>
  );
}
