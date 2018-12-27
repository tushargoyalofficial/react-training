import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: undefined,
      password: null
    };

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Hello! This is login page</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={event => this.handleInputs(event)}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={event => this.handleInputs(event)}
        />

        <button>Submit</button>
      </div>
    );
  }
}

export default Login;
