import React, { Component, useEffect, useState } from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style/faculty.css";
import { logoutUser } from "../Redux/actions/userAction";
import axios from "axios";

const Faculty = (props) => {
  const [profile, setProfile] = useState({
    name: "name",
    about_me: "about_me",
    city: "city",
    phone_no: "phone_no",
    country: "country",
    hometown: "hometown",
    school: "school",
    languages: "languages",
    gender: "gender",
  });
  const [error, setError] = useState("");

  // useEffect(async () => {
  //   const fetch = await axios.get(
  //     "https://mini-learning-app.herokuapp.com/userMyProfile"
  //   ).then
  //   console.log(fetch.data);
  //   setProfile(fetch.data);
  // });
  useEffect(() => {
    axios
      .get("https://mini-learning-app.herokuapp.com/userMyProfile")
      .then((res) => {
        setProfile({
          name: res.data.name,
          about_me: res.data.about_me,
          city: res.data.city,
          phone_no: res.data.phone_no,
          country: res.data.country,
          hometown: res.data.hometown,
          school: res.data.school,
          languages: res.data.languages,
          gender: res.data.gender,
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  console.log(profile);
  const handleLogout = async (e) => {
    e.preventDefault();
    props.logoutUser();
    alert("Logout Successfully");
    props.history.push("/login");
  };

  const handleRegisteredCourse = async (e) => {
    const data = await axios.get(
      "https://mini-learning-app.herokuapp.com/myRegisteredCourse"
    );
    console.log(data.data);
    props.history.push({ pathname: "/mycreatedcourse", state: data.data });
  };
  // console.log(props.users.user);
  return (
    <div className="row yu">
      <div className="col-md-3"></div>
      <div className="main col-md-6">
        <div className="img">
          <img className="image" src={props.users.user.image} />
        </div>

        <div className="btuu2">
          <button className="btn btn-primary btuu1">
            <a style={{ color: "white" }} href="/editprofile">
              Edit Profile
            </a>
          </button>
          <button onClick={handleLogout} className="btn btn-primary  btuu1">
            Logout
          </button>
        </div>

        {props.users.user.user_type === "faculty" ? (
          <div className="btuu">
            <button className="btn btn-primary btuu1">
              <a style={{ color: "white" }} href="/addnewcourse">
                Add New Course
              </a>
            </button>
            <button className="btn btn-primary btuu1">
              <a style={{ color: "white" }} href="/mycreatedcourse">
                My Craeted course
              </a>
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{ color: "white" }}
              onClick="handleViewCourse"
              className="btn btn-primary btuu1"
            >
              <a style={{ color: "white" }} href="/allcources">
                View All Courses
              </a>
            </button>
            <button
              style={{ color: "white" }}
              onClick={handleRegisteredCourse}
              className="btn btn-primary btuu1"
            >
              My Registered course
            </button>
          </div>
        )}
        <div className="text">
          <h2>Hello, {profile.name}</h2>

          <h4>City: {profile.city}</h4>
          <h4>Contact no: {profile.phone_no}</h4>

          <h4>About me: {profile.about_me}</h4>
          <h4>Company: {profile.company}</h4>
          <h4>School name: {profile.school}</h4>
          <h4>Hometown name: {profile.hometown}</h4>
          <h4>Languages: {profile.languages}</h4>
          <h4>Gender: {profile.gender}</h4>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Faculty));
