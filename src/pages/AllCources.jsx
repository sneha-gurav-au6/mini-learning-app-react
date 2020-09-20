import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./style/mainmycourses.css";
import "./style/allcourse.css";
import axios from "axios";

class AllCources extends Component {
  state = {
    course_name: "",
    course_dept: "",
    course_room: "",
    course_team: "",
    description: "",
    waitlist_capacit: "",
    course: null,
  };
  componentDidMount = async () => {
    const data = await axios.get(
      "https://mini-learning-app.herokuapp.com/getCources"
    );
    console.log(data.data);
    this.setState({ course: data.data });
  };

  handleRegister = async (e) => {
    const id = e.target.id;
    console.log(id);
    const data = await axios.post(
      `https://mini-learning-app.herokuapp.com/user/registeredCourse/${id}`
    );
    alert("Course Registered successfully!!");
    console.log(data.data);
  };
  render() {
    console.log(this.state.course);
    console.log(this.props.user);
    if (this.state.course) {
      return (
        <div className="container fluid">
          <div className="row">
            {this.state.course.map((p, index) => (
              <div class="container">
                <div class="card-group vgr-cards">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">{p.course_name}</h4>
                      <p class="card-text">{p.description}</p>
                      <p>
                        <b>Course room</b>
                        {p.course_room}
                        {p._id}
                      </p>
                      <button
                        id={p._id}
                        onClick={this.handleRegister}
                        class="btn btn-outline-primary"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default withRouter(AllCources);
