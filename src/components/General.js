import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = { name: '', email: '' }
  }

  setName = (e) => {
    this.setState({ name: e.target.value });
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  customSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: '', email: '' });
  }

  render() {
    const { name, email } = this.state;

    return (
      <div>
        <form onSubmit={this.customSubmit} className="personalInfoForm">
          <label htmlFor="name">Name</label>
          <input onChange={this.setName} value={name} type="text" id="name"></input>
          <label htmlFor="email">Email</label>
          <input onChange={this.setEmail} value={email} type="email" id="email"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    ) 
  }
}

export default General;
