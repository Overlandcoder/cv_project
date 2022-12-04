import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      job: {
        id: uniqid(),
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        experienceFormActive: true,
        experienceDivActive: false
      }
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      job: { ...this.state.job, [name]: value }
    });
  }

  toggleForm = () => {
    this.setState({ experienceFormActive: !this.state.experienceFormActive });
  }

  toggleDiv = () => {
    this.setState({ experienceDivActive: !this.state.experienceDivActive });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: { id: uniqid() }
    });
    this.toggleForm();
    this.toggleDiv();
  }

  // handleDelete = 

  render() {
    return(
      <div className="experience">
        <h4>Experience</h4>

        <div>
          {this.state.jobs.map(job => {
            return <div key={this.state.job.id} className="experience-info">
                    <div>{job.company}</div>
                    <div>{job.position}</div>
                    <div>{job.description}</div>
                    <div>From: {job.startDate}</div>
                    <div>To: {job.endDate}</div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleDelete}>Remove</button>
                   </div>;
          })}
        </div>

        <button onClick={this.toggleForm}>Add Experience</button>

        {this.state.experienceFormActive ?
          <form onSubmit={this.submitForm}>
            <div className="experience-form">
              <div>
                <label htmlFor="company">Company</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  id="company"
                  name="company"
                  value={this.state.job.company}
                />
                <label htmlFor="position">Position</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  id="position"
                  name="position"
                  value={this.state.job.position}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  onChange={this.handleChange}
                  rows="4"
                  cols="50"
                  id="description"
                  name="description"
                  value={this.state.job.description}
                />
              </div>
              <div>
                <label htmlFor="startDate">Start</label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={this.state.job.startDate}
                />
                <label htmlFor="endDate">End</label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={this.state.job.endDate}
                />
              </div>
            </div>
            <button type="submit" className="submit">Submit</button>
            <button onClick={this.toggleForm}>Cancel</button>
          </form>
        : null}
      </div>
    )
  }
}

export default Experience;
