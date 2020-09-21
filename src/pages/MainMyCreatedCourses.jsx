import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style/mainmycourses.css";
import axios from "axios";
import { connect } from "react-redux";

class MainMyCreatedCourses extends Component {
  render() {
    console.log(this.props.product);
    console.log(this.props.user.user.user_type);
    return (
      <div className="col-md-3 cotm">
        <div className="card cotm1">
          <div className="card-body">
            <h5 className="card-title">
              <b>Title:</b> {this.props.product.course_name}
            </h5>
            <p>
              <b>Department:</b> {this.props.product.course_dept}
            </p>
            <p>
              <b>Course-room:</b> {this.props.product.course_room}
            </p>
            <p>
              <b>Course-team:</b> {this.props.product.course_team}
            </p>
            <p>
              <b>Waitlist-capacity:</b> {this.props.product.waitlist_capacity}
            </p>
            <p>
              <b>Description:</b> {this.props.product.description}
            </p>
          </div>
          <div className="card-footer">
            <small>
              Last updated{" "}
              {new Date(this.props.product.date).toUTCString().slice(4, 16)}
              <b></b>
            </small>
          </div>
          {this.props.user.user.user_type === "faculty" ? (
            <div>
              <button className="btn btn-primary bt1">Edit</button>
              <button className="btn btn-primary bt1">Delete</button>
            </div>
          ) : (
            <div>
              <button className="btn btn-primary bt1">
                Remove from registered list
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { user: state.user };
};

export default connect(mapStateToprops)(withRouter(MainMyCreatedCourses));
