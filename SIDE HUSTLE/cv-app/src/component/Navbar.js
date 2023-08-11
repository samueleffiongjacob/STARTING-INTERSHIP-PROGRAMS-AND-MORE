/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <link to="/" className="brand-logo">
                cv
              </link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icon">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <link to="/">
                    <i className="fas fa-home"></i>Home
                  </link>
                </li>

                <li>
                  <link to="/education">
                    <i className="fas fa-graduation-cap"></i>Education
                  </link>
                </li>

                <li>
                  <link to="/experience">
                    <i className="fas fa-id-badge"></i>Experience
                  </link>
                </li>

                <li>
                  <link to="/portfolio">
                    <i className="fas fa-address-card"></i>Portfolio
                  </link>
                </li>

                <li>
                  <link to="/skills">
                    <i className="fas fa-copy"></i>Skills
                  </link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="side-nav">
          <li>
            <link to="/">
              <i className="fas fa-home"></i>Home
            </link>
          </li>

          <li>
            <link to="/education">
              <i className="fas fa-graduation-cap"></i>Education
            </link>
          </li>

          <li>
            <link to="/experience">
              <i className="fas fa-id-badge"></i>Experience
            </link>
          </li>

          <li>
            <link to="/portfolio">
              <i className="fas fa-address-card"></i>Portfolio
            </link>
          </li>

          <li>
            <link to="/skills">
              <i className="fas fa-copy"></i>Skills
            </link>
          </li>
        </ul>
      </>
    );
  }
}
