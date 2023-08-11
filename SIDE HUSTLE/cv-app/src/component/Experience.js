import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div card-content>
            <h3>
              <strong>Experience</strong>
            </h3>
            <div className="row">
              <div className="col s12 m4 l4 x14">
                <p className="teal year_exp white-text">
                  Jan
                  <strong>2016</strong> -March
                </p>
              </div>
              <div className="col s12 m8 l8 x18">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-botton">
                    <strong>Web Developer</strong>
                  </h6>
                  <p>
                    Software engineer ,Devops with 10 years of experience in
                    materials innovation, maintenance, production and design.
                    Strong attention to detail with considerable leadership
                    abilities.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 x14">
                <p className="teal year_exp white-text">
                  Jan
                  <strong>2016</strong> -March
                </p>
              </div>
              <div className="col s12 m8 l8 x18">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-botton">
                    <strong>NETWORK engineer</strong>
                  </h6>
                  <p>
                    Software engineer ,Devops with 10 years of experience in
                    materials innovation, maintenance, production and design.
                    Strong attention to detail with considerable leadership
                    abilities.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
