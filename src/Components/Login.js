import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { API_HOST } from "../constants.ts";

const loginEndPoint = `${API_HOST}/login`;

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const navigate = useNavigate();

  function loginUser() {
    //code for invoking the API
    let payload = { username: userName, password: password };

    setErrmsg("");
    //invoking the login endpoint
    axios
      .post(loginEndPoint, payload)
      .then((response) => {
        console.log("login response", response);
        const { data } = response;

        if (data.type === "A") {
          // Admin user login
          navigate("/customerList");
        } else {
          // Regular user login
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log("login error", error);
        setErrmsg(error.response.data)
      });
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              UserName
            </label>
            <input
              type="text"
              onChange={(evt) => setUserName(evt.target.value)}
              value={userName}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Save Password
            </label>
          </div>
          <div className="text-danger">{errmsg}</div>
          <button type="button" onClick={loginUser} className="btn btn-primary">
            Sign In
          </button>

          <div className="d-flex justify-content-between ">
            <a href="!#">Forgot password?</a>
          </div>

          <p className="text-center">
            Not a member? <a href="/sign-Up">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
