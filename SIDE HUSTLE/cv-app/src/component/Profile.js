/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import SamuelEffiongProfile from "../images/SAMUEL EFFIONG UI.png";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img
              className="activator"
              src={SamuelEffiongProfile}
              alt="SAMUEL EFFIONG CAPTION"
            />
            <link className="btn-floating halfway-fab waves-effect wave-light red">
              <i className="material=icons activator">more_vert</i>
            </link>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              SAMUEL EFFIONG
            </span>
            <p>Devops</p>
            <p>Full Stack DEveloper</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Follow me
              <i className="material-icons right">close</i>
            </span>
            <p className="flex-container">
              <i className="fab facebook-f grey-text text-darken-4 social-style"></i>
              <i className="fab twitter grey-text text-darken-4 social-style"></i>
              <i className="fab instagram grey-text text-darken-4 social-style"></i>
              <i className="fab instagram grey-text text-darken-4 social-style"></i>
              <i className="fab instagram grey-text text-darken-4 social-style"></i>
              <i className="fab linkedIn grey-text text-darken-4 social-style"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
