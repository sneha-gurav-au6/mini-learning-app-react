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
          <h1>Select To Continue As</h1>
          <div style={{marginTop:"30px"}}>
          <button className="but" onClick={this.handlestudent} className="btn btn-primary but1">
            <span>
            Student
            </span>
           
          </button>
          <button className="button" onClick={this.handlehange} className="btn btn-primary but1">
            <span>
            Faculty
            </span>
           
          </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
