import React, { Component } from "react";
import Guest from "./Components/Guest";
import User from "./Components/User";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <User logout={this.logout} />
        ) : (
          <Guest login={this.login} />
        )}
      </div>
    );
  }
}

export default App;