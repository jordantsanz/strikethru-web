import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';

const clientId = '487637147966-av7p4p784on1l9k83t9oqje3ugvrs0da.apps.googleusercontent.com';

const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};
class Login extends Component {
    onSuccess = (res) => {
      refreshTokenSetup(res);
      this.props.logInUser(res.profileObj);
    }

    onFailure = (res) => {
      console.log('Login failed');
    }

    render() {
      return (
        <div>
          <GoogleLogin
            render={(renderProps) => (
              <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in</button>
            )}
            clientId={clientId}
            buttonText="Login"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy="single_host_origin"
            id="google-login"
            isSignedIn
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

export default connect(mapStateToProps, { logInUser })(Login);
