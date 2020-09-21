import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

//pages imported
import MainMyCreatedCourses from "./MainMyCreatedCourses";
import Spinner from "../components/Spinner";
import isEmpty from "../utils/is-empty";
// import NotFound from "../components/NotFound";

class MyCreatedCourses extends Component {
  state = {
    data: null,
  };

  //particular user listing fetching api
  async componentDidMount() {
    const fetch = await axios.get(
      "https://mini-learning-app.herokuapp.com/getMyCourse"
    );
    const arr1 = fetch.data;
    const arr2 = arr1.flat();
    //setting data to state
    this.setState({ data: arr2 });

    if (this.props.history.location.state) {
      this.setState({ data: this.props.history.location.state });
    }
  }

  //setting updated data and sending to next props
  async componentWillReceiveProps() {
    const fetch = await axios.get(
      "https://mini-learning-app.herokuapp.com/getMyCourse"
    );
    const arr1 = fetch.data;
    const arr2 = arr1.flat();
    if (arr2) {
      this.setState({ data: arr2 });
    }
    if (this.props.history.location.state) {
      this.setState({ data: this.props.history.location.state });
    }
    //setting in state
  }

  render() {
    console.log(isEmpty(this.state.data));
    console.log((this.state.data));
    console.log(this.props.history.location.state);
    //if my listing is null show not found errror
    if (this.state.data !== null) {
      if (isEmpty(this.state.data)) {
        return (
          <div className="container-fluid">
            <h2>Not found any courses</h2>
          </div>
        );
      }

      return (
        <div className="container-fluid">
          <div className="row">
            {this.state.data.map((d, index) => (
              <MainMyCreatedCourses product={d} key={d._id} />
            ))}
          </div>
        </div>
      );
    }

    return <Spinner />;
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(withRouter(MyCreatedCourses));
