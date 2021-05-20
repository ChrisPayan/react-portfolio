import React, { Component } from "react";
import Slide from "react-reveal";

class Education extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    return (
      <section id="education">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns">
              <div
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <ul>
                  <Slide left duration={1300}>
                    <li><i className="fab fa-js fa-5x"></i></li>
                    <li><i className="fab fa-react fa-5x"></i></li>
                    <li><i className="fab fa-npm fa-5x"></i></li>
                    <li><i className="fab fa-python fa-5x"></i></li>
                  </Slide>
                  <Slide right duration={1300}>
                    <li><i className="fab fa-java fa-5x"></i></li>
                    <li><i className="fab fa-html5 fa-5x"></i></li>
                    <li><i className="fab fa-css3-alt fa-5x"></i></li>
                    <li><i className="fab fa-node-js fa-5x"></i></li>
                  </Slide>
                  <Slide left duration={1300}>
                    <li><i className="fab fa-vuejs fa-5x"></i></li>
                    <li><i className="fab fa-github fa-5x"></i></li>
                    <li><i className="fab fa-git fa-5x"></i></li>
                    <li><i className="fab fa-gitlab fa-5x"></i></li>
                  </Slide>

                </ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Education;
