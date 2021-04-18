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
        <h1 className="title">Document Filter</h1>
        <p className="smaller-text">Unsure about what you’ve written? strikethru can look through your .txt files:
          searching for  individual harmful words that match our database or sentences predicted to contain hateful speech sentiment.
          Toggle between word mode or sentence mode below to choose between the two modes. After scanning your document,
          you can view or download the filtered version, and we’ll produce some stats on what types of harmful speech are detected.
        </p>
        <FileUpload />
      </div>
    );
  }
}

export default FileUploadScreen;
