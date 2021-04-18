/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <div className="logo"><a className="link" href="#"><span data-content="strikethru">strikethru</span></a></div>
          <div className="nav-other-buttons">
            <NavLink to="/">
              <div className="nav-button nav-margin"><a href="#" className="link"><span data-content="home">home</span></a></div>
            </NavLink>
            <NavLink to="/tools">
              <div className="nav-button nav-margin"><a href="#" className="link"><span data-content="censor tools">censor tools</span></a></div>
            </NavLink>
            <NavLink to="/upload">
              <div className="nav-button nav-margin"><a href="#" className="link"><span data-content="file upload">file upload</span></a></div>
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
