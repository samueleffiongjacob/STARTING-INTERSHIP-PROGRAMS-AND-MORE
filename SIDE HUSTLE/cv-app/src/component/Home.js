/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m3  l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Skill />
              <Experience />
              <Education />
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
