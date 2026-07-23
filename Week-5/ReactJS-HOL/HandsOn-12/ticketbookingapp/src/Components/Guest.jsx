import React from "react";
import FlightDetails from "./FlightDetails";

function Guest(props) {
  return (
    <div>
      <h1>Welcome Guest</h1>

      <FlightDetails />

      <br />

      <button onClick={props.login}>
        Login
      </button>
    </div>
  );
}

export default Guest;