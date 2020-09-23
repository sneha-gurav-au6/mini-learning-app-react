import React, { Component } from "react";
import { connect } from "react-redux";
import { editProfile } from "../Redux/actions/userAction";
import { withRouter } from "react-router-dom";

//edit profile -authentication required
class EditProfile extends Component {
  //initialising states
  state = {
    id: "",
    name: "",
    image: "",
    city: "",
    phone_no: "",
    country: "",
    about_me: "",
    company: "",
    school: "",
    hometown:"",
    languages:"",
    gender:""
  };

  textHandle = (e) => {
    e.preventDefault();
    this.setState({ id: this.props.user.id });
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //dispatching data from user input
  textSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.editProfile({
      editData: formData,
      history: this.props.history,
    });
    
  };

  render() {
    console.log(this.props.user);
    return (
      <div className="create-profile mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-3 text-center my-2">Edit Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>

              <form onSubmit={this.textSubmit} encType="multipart/form-data">
                {/* upload profile image */}
                <input type="file" name="image" onChange={this.textHandle} />

                {/* Enter your name */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="My Name"
                    name="name"
                    onChange={this.textHandle}
                    
                  />
                  <small className="form-text text-muted">
                    Enter Your Name
                  </small>
                </div>

               
                {/* Enter your city */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                   
                    name="city"
                    onChange={this.textHandle}
                
                  />
                  <small className="form-text text-muted">
                    city
                  </small>
                </div>

                {/* Enter contact no */}
                <div className="input-group mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <h5>+91</h5>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Contact Number"
                    name="contactNo"
                    onChange={this.textHandle}
                  />
                </div>
                <small className="form-text text-muted mb-4">
                  Enter Your Contact Number
                </small>

                {/* country*/}
             

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="country"
                    onChange={this.textHandle}
                  
                  />
                  <small className="form-text text-muted">
                    country
                  </small>
                </div>

                  {/* about me*/}
             

                  <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="about_me"
                    onChange={this.textHandle}
                
                  />
                  <small className="form-text text-muted">
                    About me
                  </small>
                </div>


              {/* company*/}
             

              <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="company"
                    onChange={this.textHandle}
                    
                  />
                  <small className="form-text text-muted">
                    company
                  </small>
                </div>

                    {/* school*/}
             

                    <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="school"
                    onChange={this.textHandle}
              
                  />
                  <small className="form-text text-muted">
                    Enter your school name                                               
                  </small>
                </div>
    {/* hometown*/}
             

    <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="hometown"
                    onChange={this.textHandle}
              
                  />
                  <small className="form-text text-muted">
                    Enter your hometown
                  </small>
                </div>
                <br />
                    {/* Languages*/}
             

                    <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name=" languages"
                    onChange={this.textHandle}
                
                  />
                  <small className="form-text text-muted">
                    Languages
                  </small>
                </div>
                    {/* gender*/}
             

                    <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                  
                    name="gender"
                    onChange={this.textHandle}
                
                  />
                  <small className="form-text text-muted">
                    gender
                  </small>
                </div>

                <div className="d-flex justify-content-around">
                  <button
                    id="saveButton"
                    type="submit"
                    className="btn btn-info col-5"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
    return {
        user:state.user.user
    }
}

export default connect(mapStateToProps,{editProfile})(withRouter(EditProfile));