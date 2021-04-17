/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from './auth/Login';
import Logout from './auth/Logout';

class NavBar extends Component {
    determineButton = () => {
      if (this.props.username === '') {
        return <Login />;
      } else {
        return <Logout />;
      }
    }

    render() {
      return (
        <div className="navbar-main">
          <div className="logo">strikethru</div>
          <div className="nav-other-buttons">
            <NavLink to="/">
              <div className="nav-button nav-margin">home</div>
            </NavLink>
            <NavLink to="/tools">
              <div className="nav-button nav-margin">censor tools</div>
            </NavLink>
            <NavLink to="/upload">
              <div className="nav-button nav-margin">file upload</div>
            </NavLink>
            {this.determineButton()}
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    name: state.user.name,
  };
}

export default connect(mapStateToProps, null)(NavBar);
