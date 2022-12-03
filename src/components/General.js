import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      infoFormActive: true,
      infoDivActive: false
    }
  }

  setName = (e) => {
    this.setState({ name: e.target.value });
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  toggleForm = () => {
    this.setState({ infoFormActive: !this.state.infoFormActive });
  }

  toggleDiv = () => {
    this.setState({ infoDivActive: !this.state.infoDivActive});
  }

  submitForm = (e) => {
    e.preventDefault();
    this.toggleForm();
    this.toggleDiv();
  }

  showForm = () => {
    this.toggleForm();
    this.toggleDiv();
  }

  render() {
    const { name, email } = this.state;

    return (
      <div>
        {this.state.infoFormActive ?
          <form onSubmit={this.submitForm} className="personal-info-form">
            <label htmlFor="name">Name</label>
            <input onChange={this.setName} value={name} type="text" id="name"></input>
            <label htmlFor="email">Email</label>
            <input onChange={this.setEmail} value={email} type="email" id="email"></input>
            <button type="submit">Submit</button>
          </form>
          :
          <div className="personal-info">
            <h3>{this.state.name}</h3>
            {this.state.email}
            <button onClick={this.showForm}>Edit</button>
          </div>
        }
      </div>
    )
  }
}

export default General;
