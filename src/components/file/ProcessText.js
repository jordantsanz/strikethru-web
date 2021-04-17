import React, { Component } from 'react';
import { connect } from 'react-redux';
import { processText } from '../../actions';

class ProcessText extends Component {
    process = () => {
      this.props.processText(this.props.filename);
    }

    render() {
      return (
        <div>
          <button type="button" onClick={this.process}>Process text</button>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    filename: state.file.filename,
  };
}

export default connect(mapStateToProps, { processText })(ProcessText);
