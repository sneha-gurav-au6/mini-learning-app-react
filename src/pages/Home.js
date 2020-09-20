import React, { Component } from "react";
import "./style/home.css";
import { Redirect, withRouter } from "react-router-dom";

class Home extends Component {
  handlehange = () => {
    this.props.history.push({ pathname: "/register", state: "faculty" });
  };
  handlestudent = () => {
    this.props.history.push({ pathname: "/register", state: "student" });
  };
  render() {
    return (
      <div className="main">
        <div className="child">
          <h2 style={{ color: "white" }}>Select Who you are??</h2>
          <button onClick={this.handlestudent} className="btn btn-primary but1">
            Student
          </button>
          <button onClick={this.handlehange} className="btn btn-primary but1">
            Faculty
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
