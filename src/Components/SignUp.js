import React, { useState } from 'react';
import axios from "axios";
import { API_HOST } from "../constants.ts";
import Alert from 'react-bootstrap/Alert';

const registerEndPoint = `${API_HOST}/users`;

export default function SignUp() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerm, setAgreedToTerm] = useState(false);
  const [alertStyle, setAlertStyle] = useState("success");
  const [apiResponse, setApiResponse] = useState("");
  
  
  function SignUp(){
      
          //code for invoking the API
          let payload={ name:name,
                          phoneNo:phoneNo,
                          address:address,
                          email:email,
                          username:userName,
                          password:password,
                          pass2:confirmPassword,
                          agreedToTerm:agreedToTerm
             
          };
  
          //invoking the POST API CALL
          axios.post(registerEndPoint, payload)
              .then((response)=> {
                console.log(response);
              //   this.setState({ successmsg: response.data, error: "" });
              setAlertStyle('success')
              setApiResponse(response.data)
              })
              .catch(error => {
                  console.error(error);
                  setAlertStyle('danger')
                if (error.response) {
                  
                  setApiResponse(error.response.data)
                  // this.setState({ errormsg: error.response.data.message, successmsg: "" });
                } else {
                  setApiResponse("Failed to create user "+ error)
                  // this.setState({ errormsg: error.message, successmsg: "" });
                }
          });
      }


  return (
    <div className="container">
      <form>.
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="name" 
          onChange={(evt) => setName(evt.target.value)} value={name}
          className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">
            PhoneNo
          </label>
          <input type="phoneNo" 
          onChange={(evt) => setPhoneNo(evt.target.value)} value={phoneNo}
          className="form-control" id="phoneNo" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="address" 
          onChange={(evt) => setAddress(evt.target.value)} value={address}
          className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input type="userName" 
          onChange={(evt) => setUserName(evt.target.value)} value={userName}
          className="form-control" id="userName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={(evt) => setEmail(evt.target.value)} value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(evt) => setPassword(evt.target.value)} value={password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="confirmPassword"
            onChange={(evt) => setConfirmPassword(evt.target.value)} value={confirmPassword}
            className="form-control"
            id="confirmPassword"
          />
        </div>
        { apiResponse &&
<Alert key={alertStyle} variant={alertStyle}>
{apiResponse}
</Alert>}

        <button type="button" onClick={SignUp} className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
