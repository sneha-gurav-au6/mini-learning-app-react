import React, { Component, useEffect, useState } from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
 import "./style/faculty.css";
import { logoutUser } from "../Redux/actions/userAction";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

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
    user_type:""
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
          user_type:res.data.user_type
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
    toast.success("Logout Successfully!", {
      position: toast.POSITION.TOP_CENTER,
  });
   
    props.history.push("/login");
  };

  const handleRegisteredCourse = async (e) => {
    const data = await axios.get(
      "https://mini-learning-app.herokuapp.com/myRegisteredCourse"
    );
    const arr1=data.data
    const arr2 = arr1.flat()
    console.log(arr2)
    props.history.push({ pathname: "/mycreatedcourse", state: arr2});
  };
  // console.log(props.users.user);
  return (
    <div className="row ">
      <div className="col-md-1"></div>
      <div className=" col-md-3 but">
      

        <div className="main">
          <ul class="list-unstyled">
          <li className="li1">
          <button className="btn btn-primary ">
            <a style={{ color: "white" }} href="/editprofile">
              Edit Profile
            </a>
          </button>
          </li>
       <li className="li1">
       <button onClick={handleLogout} className="btn btn-primary  ">
            Logout
          </button>
       </li>
          
        

        {profile.user_type === "faculty" ? (
          <div className="">
            <li className="li1"> 
            <button className="btn btn-primary ">
              <a style={{ color: "white" }} href="/addnewcourse">
                Add New Course
              </a>
            </button>
            </li>
          
            <li className="li1">
            <button className="btn btn-primary ">
              <a style={{ color: "white" }} href="/mycreatedcourse">
                My Craeted course
              </a>
            </button>
            </li>
           
          </div>
        ) : (
          <div>
            <li className="li1">
            <button
              style={{ color: "white" }}
              onClick="handleViewCourse"
              className="btn btn-primary "
            >
              <a style={{ color: "white" }} href="/allcources">
                View All Courses
              </a>
            </button>
            </li>
          
          <li className="li1">
          <button
              style={{ color: "white" }}
              onClick={handleRegisteredCourse}
              className="btn btn-primary "
            >
              My Registered course
            </button>
          </li>
          
          </div>
        )}
          </ul>
         
      </div>
      </div>
      <div className="col-md-1"></div>

      <div className="col-md-6">
      <div className="img">
        
        </div>
      <div className="text">
      <img className="image" src={props.users.user.image} />
      <div className="para">
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
      </div>
        
        <div className="col-md-2"></div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Faculty));
