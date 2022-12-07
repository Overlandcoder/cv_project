import React, { useState } from "react";
import uniqid from "uniqid";

const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(
    {
      id: uniqid(),
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
      experienceFormActive: true
    }
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setJob({ ...job, [name]: value });
  }

  const toggleForm = () => {
    setJob(j => ({ ...j, experienceFormActive: !j.experienceFormActive }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    setJob({ ...job, id: uniqid() });
    setJobs(jobs.concat(job));
    toggleForm();
  }

  const handleDelete = (id) => setJobs(jobs.filter(job => job.id !== id));

  return(
    <div className="experience">
      <h4>Experience</h4>

      <div>
        {jobs.map(job => {
          return <div key={job.id} className="experience-info">
                  <div>{job.company}</div>
                  <div>{job.position}</div>
                  <div>{job.description}</div>
                  <div>From: {job.startDate}</div>
                  <div>To: {job.endDate}</div>
                  <button onClick={() => handleDelete(job.id)}>Remove</button>
                  </div>;
        })}
      </div>

      <button onClick={toggleForm}>Add Experience</button>

      {job.experienceFormActive ?
        <form onSubmit={submitForm}>
          <div className="experience-form">
            <div>
              <label htmlFor="company">Company</label>
              <input onChange={handleChange} type="text" id="company" name="company" value={job.company}/>
              <label htmlFor="position">Position</label>
              <input onChange={handleChange} type="text" id="position" name="position" value={job.position}/>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea onChange={handleChange} rows="4" cols="50" id="description" name="description" value={job.description}/>
            </div>
            <div>
              <label htmlFor="startDate">Start</label>
              <input onChange={handleChange} type="date" id="startDate" name="startDate" value={job.startDate}/>
              <label htmlFor="endDate">End</label>
              <input
                onChange={handleChange} type="date" id="endDate" name="endDate" value={job.endDate}/>
            </div>
          </div>
          <button type="submit" className="submit">Submit</button>
          <button onClick={toggleForm}>Cancel</button>
        </form>
      : null}
    </div>
  )
}

export default Experience;
