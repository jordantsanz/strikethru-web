/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { logOutUser } from '../../actions';

class Logout extends Component {
    logout = () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        this.props.logOutUser();
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    render() {
      return (
        <div>
          <button onClick={this.logout} type="button">Log out</button>
        </div>
      );
    }
}
function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
  };
}

export default connect(mapStateToProps, { logOutUser })(Logout);
