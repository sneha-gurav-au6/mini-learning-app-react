import React, { Component } from "react";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Redux/actions/setAuthToken";
import { setCurrentUser } from "./Redux/actions/userAction";

import { connect } from "react-redux";
import Home from "./pages/Home"
import Faculty from "./pages/Faculty"
import Login from "./components/Login"
import Register from "./components/Register";
import AddNewCourse from "./pages/AddNewCourse";
import EditProfile from "./pages/EditProfile";
import MyCreatedCourses from "./pages/MyCreatedCourses";
import AllCources from "./pages/AllCources";


class App extends Component {
  componentDidMount() {
    // Check for token
    if (localStorage.jwtToken) {
      // Set token to Auth header
      setAuthToken(localStorage.jwtToken);
      // Decode jwt token
      const decode = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      this.props.setCurrentUser(decode);
    }
  }
  render() {
    return (
      <div className="App">
     
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-dashboard" component={Faculty} />
        <Route exact path="/login" component={Login} /> 
      
            <Route exact path="/register" component={Register} />
            <Route exact path="/addnewcourse" component={AddNewCourse} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/mycreatedcourse" component={MyCreatedCourses} />
            <Route exact path="/allcources" component={AllCources} />
       

         
     
        </Switch>
      </div>
    );
  }
}
export default connect(null, { setCurrentUser, setAuthToken })(App);
