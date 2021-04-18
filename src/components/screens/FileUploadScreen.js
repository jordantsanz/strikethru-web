/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FileUpload from '../file/FileUpload';
import NavBar from '../NavBar';

class FileUploadScreen extends Component {
  render() {
    return (
      <div className="screen-main">
        <NavBar />
        <div className="background" />
        <h1 className="title">File Upload</h1>
        <p className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nunc sit amet venenatis fringilla,
          libero nisi faucibus dui, eget suscipit enim augue quis sapien.
          Vivamus scelerisque risus sed risus euismod vehicula at a ipsum. Donec porttitor velit quis felis vestibulum, non rhoncus libero facilisis.
        </p>
        <FileUpload />
      </div>
    );
  }
}

export default FileUploadScreen;
