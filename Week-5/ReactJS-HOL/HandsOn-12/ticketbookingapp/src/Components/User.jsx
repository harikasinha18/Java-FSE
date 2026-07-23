import React from "react";
import FlightDetails from "./FlightDetails";

function User(props) {
  return (
    <div>
      <h1>Welcome User</h1>

      <FlightDetails />

      <br />

      <button>Book Ticket</button>

      <button
        onClick={props.logout}
        style={{ marginLeft: "10px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default User;