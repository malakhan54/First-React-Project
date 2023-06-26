// import React from 'react'

// export default function CustomerList() {
//   return (
//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Name</th>
//       <th scope="col">PhoneNo</th>
//       <th scope="col">Email</th>
//       <th scope="col">Address</th>
//       <th scope="col">UserName</th>
//       <th scope="col">Type</th>
//       <th scope="col">Delete</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//   </tbody>
// </table>
//   )
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_HOST } from "../constants.ts";

const usersEndPoint = `${API_HOST}/users`;

function deleteUser(id) {
  // TODO: Add a prompt
  axios.delete(usersEndPoint + "/deleteRecord/" + id).then((response) => {
    // TODO: Update component state when backend call is successful.
    console.log("DELETE request", response);
  });
}

function createTableRow(user) {
  return (
    <tr key={user._id}>
      <th scope="row">{user._Id}</th>
      <td>{user.name}</td>
      <td>{user.phoneNo}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.username}</td>
      <td>{user.type}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={function () {
            deleteUser(user._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getUsers() {
      axios.get(usersEndPoint).then((response) => {
        const { data } = response;
        setUsers(data);
      });
    }
    getUsers()
  });


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">PhoneNo</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">UserName</th>
          <th scope="col">Type</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>{users.map((user) => createTableRow(user))}</tbody>
    </table>
  );
}
