import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function ({ displayMode }) {
  const isLoginDisplaying = displayMode == "login";

  let childComponent;
  if (isLoginDisplaying) {
    childComponent = <Login></Login>;
  } else {
    childComponent = <SignUp></SignUp>;
  }
  return (
    <div>
      <nav className="nav nav-pills justify-content-center">
        <Link
          className={`nav-link ${isLoginDisplaying ? "active" : ""}`}
          aria-current="page"
          to={"/login"}
        >
          Login
        </Link>
        <Link
          className={`nav-link ${isLoginDisplaying ? "" : "active"}`}
          aria-current="page"
          to={"/sign-up"}
        >
          Sign Up
        </Link>
      </nav>

      {childComponent}
    </div>
  );
}
