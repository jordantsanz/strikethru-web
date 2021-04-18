/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { useMemo, useState, useCallback } from 'react';
// import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector, connect } from 'react-redux';
import firebase from 'firebase';
import { sendFile, logInUser } from '../../actions';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  outline: 'none',
  width: '592px',
  transition: 'border .24s ease-in-out',
  border: '1px solid #F2F2F2',
  boxSizing: 'border-box',
  borderRadius: '30px',
  height: '360px',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function FileUpload(props) {
  const dispatch = useDispatch();
  const [myFiles, setMyFiles] = useState([]);
  const [showFile, setShowFile] = useState(false);
  const username = useSelector((state) => state.user.username);

  // drops file
  const onDrop = useCallback((acceptedFiles) => {
    setMyFiles([...myFiles, ...acceptedFiles]);
  }, [myFiles]);

  // gets dropzone
  const {
    getRootProps, getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 1, accept: '.txt, .doc, .docx' });

  // style
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isDragActive,
    isDragReject,
    isDragAccept,
  ]);

  const tryLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const { credential } = result;
      const token = credential.accessToken;
      const { user } = result;
      console.log(user, token);
      dispatch(logInUser(user, token));
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  // uploads file
  const upload = () => {
    console.log('username', username);
    if (username !== '') {
      console.log('uploading');
      const data = new FormData();
      data.append('file', myFiles[0]);
      dispatch(sendFile(data, username));
    } else {
      tryLogin();
    }
  };

  // removes file
  const removeFile = () => {
    setMyFiles([]);
  };
  if (props.file && showFile) {
    const codes = props.file.split('.txt')[1].split('\n');
    return (
      <section className="container">
        <div className="base-style">
          <div className="ready-to-strike">Success</div>
          {codes.map((code) => {
            const info = code.split(',');
            if (info.length === 2) {
              return (
                <div key={info[0]}>{info[1]} {info[0]} words found.</div>
              );
            }
            return null;
          })}
          <div className="base-buttons">
            <div className="nav-button outline margin-bottom" onClick={() => setShowFile(!showFile)}>Hide</div>
          </div>
        </div>
        <div className="filename">{myFiles[0].name}</div>
        <div>
          {props.file.split('processed')[0]}
        </div>
      </section>
    );
  }
  if (props.file) {
    const codes = props.file.split('.txt')[1].split('\n');
    return (
      <section className="container">
        <div className="base-style">
          <div className="ready-to-strike">Success</div>
          {codes.map((code) => {
            const info = code.split(',');
            if (info.length === 2) {
              return (
                <div key={info[0]}>{info[1]} {info[0]} words found.</div>
              );
            }
            return null;
          })}
          <div className="base-buttons">
            <div className="nav-button outline margin-bottom" onClick={() => setShowFile(!showFile)}>View</div>
          </div>
        </div>
      </section>
    );
  }
  if (myFiles.length === 0) {
    return (
      <section className="container">
        <div {...getRootProps({ className: 'dropzone', style })}>
          <input {...getInputProps()} />
          <div className="drag-and-drop">drag and drop</div>
          <div className="or">or</div>
          <div className="nav-button outline upload-from-computer">upload from computer</div>
        </div>
      </section>
    );
  }
  return (
    <section className="container">
      <div className="base-style">
        <div className="ready-to-strike">Ready to strikethru?</div>
        <div className="filename">{myFiles[0].name}</div>
        <div className="base-buttons">
          <div className="nav-button outline margin-bottom" onClick={upload}>let&apos;s do this</div>
          <div className="nav-button outline" onClick={removeFile}>change file</div>
        </div>
      </div>
    </section>
  );
}
function mapStateToProps(state) {
  return {
    file: state.file.file,
  };
}

export default connect(mapStateToProps, null)(FileUpload);
