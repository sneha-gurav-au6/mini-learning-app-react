import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./style/mainmycourses.css";
import "./style/allcourse.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner"
toast.configure();

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
    
 
    toast.success("Course Registered successfully!!", {
      position: toast.POSITION.TOP_CENTER,
  });
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
              <div className="col-md-3 cotm">
              <div className="card cotm1">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Title:</b> {p.course_name}
                  </h5>
                  <p>
                    <b>Department:</b> {p.course_dept}
                  </p>
                  <p>
                    <b>Course-room:</b> {p.course_room}
                  </p>
                  <p>
                    <b>Course-team:</b> {p.course_team}
                  </p>
                  <p>
                    <b>Waitlist-capacity:</b> {p.waitlist_capacit}
                  </p>
                  <p>
                    <b>Description:</b> {p.description}
                  </p>
                </div>
                <div className="card-footer">
                  <small>
                    Last updated{" "}
                    {new Date(p.date).toUTCString().slice(4, 16)}
                    <b></b>
                  </small>
                </div>
          
                
                  <div>
                    <button onClick={this.handleRegister} id={p._id} className="btn btn-primary bt1">
                      Register Now
                    </button>
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
      <Spinner/>
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
