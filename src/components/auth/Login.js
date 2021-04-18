/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { logInUser } from '../../actions';

class Login extends Component {
    tryLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        const { credential } = result;
        const token = credential.accessToken;
        const { user } = result;
        this.props.logInUser(user, token);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }

    render() {
      return (
        <div>
          <button className="nav-button" id="last-nav-button" type="button" onClick={this.tryLogin}><a href="#" className="link"><span data-content="log in">log in</span></a></button>
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
  };
}

export default connect(mapStateToProps, { logInUser })(Login);
