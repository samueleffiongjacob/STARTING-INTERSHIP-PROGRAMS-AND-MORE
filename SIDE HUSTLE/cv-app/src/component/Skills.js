import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h3>
              <strong>PROFESSIONAL SKILLS</strong>
            </h3>
          </div>
          <div className="row mt-top">
            <div className="col s6">
              <p>Html</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "89%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Css,Boostrap,materialise css</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "89%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Javascript</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "75%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Python</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "70%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Data Scince with Python,R and Meachine learning</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "90%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Golang</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "49%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Python library (flak,Django,e.t.c</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "79%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Networking</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "89%" }}></div>
              </div>
            </div>
            <div className="col s6">
              <p>Sound, Graphic,Video Editing,and stage light engineering</p>
              <div className="progress grey light-1">
                <div className="determinate blue" style={{ with: "79%" }}></div>
              </div>
              <div className="col s6">
                <p>Nodejs</p>
                <div className="progress grey light-1">
                  <div
                    className="determinate blue"
                    style={{ with: "89%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Mongo Db, Mysql,e.t.c</p>
                <div className="progress grey light-1">
                  <div
                    className="determinate blue"
                    style={{ with: "89%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
