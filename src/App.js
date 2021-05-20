import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import './App.css';

import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./allInfoSpace.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Education data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.Portfolio} />


      </div>
    )
  };
}

export default App;
