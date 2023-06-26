import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import LoginContainer from "./Components/LoginContainer";
import Profile from "./Components/Profile";
import CustomerList from "./Components/UsersList";
// import UrlParamFC from './UrlParamFC';
export default class Router extends Component {
  render() {
    return (
      <Routes>
        {/* <Route path="/" element={<HomePage></HomePage>} /> */}
        <Route
          path="/login"
          element={<LoginContainer displayMode="login"></LoginContainer>}
        />
        <Route
          path="/sign-up"
          element={<LoginContainer displayMode="signup"></LoginContainer>}
        />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/customerList" element={<CustomerList></CustomerList>} />
      </Routes>
    );
  }
}
