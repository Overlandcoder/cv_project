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

  submitForm = (e) => {
    e.preventDefault();
    const personalInfoForm = document.querySelector(".personalInfoForm");
    const personalInfoDiv = document.querySelector(".personalInfo");
    personalInfoForm.classList.toggle("hidden");
    personalInfoDiv.classList.toggle("hidden");
    // this.setState({ name: '', email: '' });
    console.log(personalInfoDiv.classList)
  }

  render() {
    const { name, email } = this.state;
    console.log(this.state)

    return (
      <div>
        <form onSubmit={this.submitForm} className="personalInfoForm">
          <label htmlFor="name">Name</label>
          <input onChange={this.setName} value={name} type="text" id="name"></input>
          <label htmlFor="email">Email</label>
          <input onChange={this.setEmail} value={email} type="email" id="email"></input>
          <button type="submit">Submit</button>
        </form>
        <div className="personalInfo hidden">
          <h3>{this.state.name}</h3>
          {this.state.email}
          <button onClick={this.submitForm}>Edit</button>
        </div>
      </div>
    ) 
  }
}

export default General;
