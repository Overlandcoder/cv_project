import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      job: {
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: ''
      }
    }
  }

  submitForm = (e) => {
    e.preventDefault();

  }

  render() {
    return(
      <div className="experience">
        <h4>Experience</h4>
        <form onSubmit={this.submitForm}>
          <div className="experience-form">
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" />
              <label htmlFor="position">Position</label>
              <input type="text" id="position" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea rows="4" cols="50" id="description" />
            </div>
            <div>
              <label htmlFor="startDate">Start</label>
              <input type="date" id="startDate" />
              <label htmlFor="endDate">End</label>
              <input type="date" id="endDate" />
            </div>
          </div>
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Experience;
