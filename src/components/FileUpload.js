/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendFile } from '../actions';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: '',
      docs: {
        uri: '',
      },
    };
  }

    onChangeHandler = (event) => {
      console.log('event', event.target.files[0]);
      this.setState({
        selectedFile: event.target.files[0],
      });
    }

    uploadFile = () => {
      if (this.state.selectedFile !== '') {
        console.log(this.state.selectedFile);
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        // this.props.sendFile(data);
      }
    }

    logError = (e) => {
      console.log('error: ', e);
    }

    render() {
      return (
        <div>
          <input type="file" onChange={this.onChangeHandler} />
          <button type="button" onClick={this.uploadFile}>Upload</button>
        </div>
      );
    }
}
export default connect(null, { sendFile })(FileUpload);
