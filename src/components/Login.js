import React, { Component } from "react";
import { loginUsers, loginStudent } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import "./style/register.css";

//login page form and google login
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  //getting data from form
  handleChange = (e) => {
    const { name, value } = e.target;
    //setting state
    this.setState({ [name]: value });
  };

  //getting data from form
  handleSubmit = async (e) => {
    e.preventDefault();
    //creating object data
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    const data = {
      newUser: newUser,
      history: this.props.history,
    };
    //dispatch to props

    const rgs = this.props.loginUsers(data);

    console.log(rgs);
  };

  //after changing props to get data
  componentWillReceiveProps(nextprops) {
    console.log(nextprops.auth.user.id);
if(nextprops.auth.user.id){
  this.props.history.push("/faculty");
}
   
  }
  render() {
    console.log(this.props.history.location.state);
    const { errors } = this.props.auth;
    // console.log(this.props.auth);
    return (
      <div className="container-fluid register">
        <div className="row mt-2">
          <div className="col-md-3"></div>

          {/* 
                    login form  */}
          <div className="col-md-5 text1">
            <h2 style={{ color: "white" }}>login Here!!!</h2>
            <form onSubmit={this.handleSubmit}>
              {/* Enter email */}
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Enter password */}
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.message,
                  })}
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  name="password"
                />
                {errors.message && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className={classnames("btn btn-primary", {
                    "is-invalid": errors.message,
                  })}
                >
                  Submit
                </button>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.user };
};

export default connect(mapStateToProps, { loginUsers })(withRouter(Login));
