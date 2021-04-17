/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './auth/Login';
import Logout from './auth/Logout';
import FileUpload from './file/FileUpload';

class Home extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="main-container">
        <Login />
        <Logout />
        <div>{this.props.name}</div>
        <FileUpload />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.user.username,
    name: reduxState.user.name,
  };
}

export default connect(mapStateToProps, null)(Home);
