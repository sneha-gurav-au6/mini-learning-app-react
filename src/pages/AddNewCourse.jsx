import React, { Component } from "react";
import axios from "axios";
import "./style/addcourse.css";
import { connect } from "react-redux";
// import { addPro } from "../Redux/actions/productAction";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

// adding new courses for faculty

class AddNewCourse extends Component {
  state = {
    title:"",
    department:"",
    room:"",
    team:"",
    description:"",
    waitlist:"",
    errors: {},
    token: null,
  };

  componentDidMount() {
    if (localStorage) {
      const id = localStorage.getItem("jwtToken");
      this.setState({ token: id });
    }
  }

 //getting input from form
 handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
 
};
  //fetching api and sending data to route
  handleFormData = async (e) => {
    e.preventDefault();
    const newData = {

        course_name:this.state.title,
        description:this.state.description,
        course_room:this.state.room,
        course_dept:this.state.department,
        course_team:this.state.team,
        waitlist_capacity:this.state.waitlist,

    }
console.log(newData)
    const datas = await axios.post(
      "https://mini-learning-app.herokuapp.com/user/addCourse",
      newData
    );
    if (datas.status === 200) {
      toast.success("Course Added Successfully!", {
        position: toast.POSITION.TOP_CENTER,
    });
     
      this.props.history.push("/user-dashboard");
    }
  };

  render() {
    return (
      <div className="container-fluid w-50">
        <form onSubmit={this.handleFormData} >
          <div className="form-group ">
            {/* add title */}
            <label for="exampleInputEmail1">Add Course Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Course Description</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              required
            ></textarea>
          </div>
          {/* 
add dept */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">Course Department</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="department"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
              required
            />
          </div>

          {/* 
add course room */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">Course Room</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="room"
              required
            ></textarea>
          </div>

                {/* 
add waitlist */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">WaitList Capacity</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="waitlist"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
              required
            />
          </div>
                     {/* 
add course-team */}
       <div className="form-group">
            <label for="exampleFormControlTextarea1">Course Team</label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="team"
              required
            ></textarea>
          </div>


          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps)(withRouter(AddNewCourse));
