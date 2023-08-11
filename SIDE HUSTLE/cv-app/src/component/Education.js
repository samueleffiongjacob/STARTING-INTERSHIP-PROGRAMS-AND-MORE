/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

export default class Education extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h3>
              <strong>Educations</strong>
            </h3>
            <table className="striped">
              <thead>
                <tr>
                  <th>certificate</th>
                  <th>date</th>
                  <th>school</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Data sciencties</td>
                  <td>01 may 2009</td>
                  <td>
                    <Link to="#" className="btn blue lighten-2">
                      {" "}
                      view
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
