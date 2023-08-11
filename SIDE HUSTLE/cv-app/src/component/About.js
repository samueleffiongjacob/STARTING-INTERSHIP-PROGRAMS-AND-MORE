import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h3 className="mt-bottom">
              <strong>ABOUT ME</strong>
            </h3>
            <p className="blue-text">
              Am a Results-driven professional with repeated success in guiding
              IT projects,Devops,Mechaine Learning,Data Science,Fullstack
              Engineering Visual Engineering(Video Editing, Graphic design,Sound
              ) and Networking Engineering from start to finish, managing
              technical support operations and introducing new technologies to
              promote operational efficiency.Work with servally Oganisation as
              well.
            </p>
          </div>
          <div className="card-action">
            <h3>
              <strong>PERSONAL INFO</strong>
            </h3>
          </div>
          <div className="row at">
            <div className="col s12 m6 l6 x16">
              <p>
                <strong>Address</strong> Abuja Nigeria
              </p>
              <p>
                <strong>Email:</strong> samueleffiongjacob@gmail.com
              </p>
              <p>
                <strong>Tag</strong> Devops and Fullstack for inovating changes
                in petroluem industry, Finance Institution ,Nigerian defence.
              </p>
              <p>
                <strong>Phone Number:</strong> 08183687659
              </p>
            </div>
            <div className="s12 m6 l6 x16">
              <p>
                <strong>Primary language</strong> Etebi,Oron,ibibeo.
              </p>
              <p>
                <strong>Secondary language</strong> English
              </p>
              <p>
                <strong>Third language</strong> pigin
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
