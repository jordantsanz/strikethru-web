import firebase from 'firebase';

const tryLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((result) => {
    const { credential } = result;
    const token = credential.accessToken;
    const { user } = result;
    console.log(user, token);
    return [user, token];
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

export default tryLogin;
