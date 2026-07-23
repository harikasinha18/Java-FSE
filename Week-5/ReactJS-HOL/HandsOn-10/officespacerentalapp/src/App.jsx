import React from "react";
import officeImage from "./office.jpg";

function App() {
  const office = {
    name: "Smart Tech Office",
    rent: 55000,
    address: "Madhapur, Hyderabad"
  };

  const officeList = [
    {
      name: "Smart Tech Office",
      rent: 55000,
      address: "Madhapur, Hyderabad"
    },
    {
      name: "Skyline Workspace",
      rent: 75000,
      address: "Gachibowli, Hyderabad"
    },
    {
      name: "Elite Business Center",
      rent: 45000,
      address: "Banjara Hills, Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Office Space List</h2>

      {officeList.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <p><b>Name:</b> {item.name}</p>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p><b>Address:</b> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;