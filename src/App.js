import React, { Component } from 'react';
// import './App.css';
import General from "./components/General";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="resume">
          <h2>CV</h2>
          <General />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
