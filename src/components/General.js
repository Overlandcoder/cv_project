import React, { useState } from "react";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [infoFormActive, setInfoFormActive] = useState(true);

  const toggleForm = () => setInfoFormActive(!infoFormActive);
  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    toggleForm();
  }

  return (
    <div>
      {infoFormActive ?
        <form onSubmit={submitForm} className="personal-info-form">
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange} value={name} type="text" id="name"></input>
          <label htmlFor="email">Email</label>
          <input onChange={handleEmailChange} value={email} type="email" id="email"></input>
          <button type="submit">Submit</button>
        </form>
        :
        <div className="personal-info">
          <h3>{name}</h3>
          {email}
          <button onClick={toggleForm}>Edit</button>
        </div>
      }
    </div>
  )
}

export default General;
