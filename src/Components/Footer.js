import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
            </div>
            <ul className="copyright">
              <li>&copy; Copyright 2021 Christian Payan</li>
              <li>
                Powered by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                  </a>
                {" "}and{" "}
                <a title="React" href="https://reactjs.org/">
                  React
                </a>
              </li>
            </ul>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
