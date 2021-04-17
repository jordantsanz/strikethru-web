/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

const clientId = '487637147966-av7p4p784on1l9k83t9oqje3ugvrs0da.apps.googleusercontent.com';

class Logout extends Component {
  render() {
    return (
      <div>
        <GoogleLogout
          render={(renderProps) => (
            <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
          )}
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={this.props.logOutUser}
        />
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
