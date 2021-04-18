/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import $ from 'jquery';
import NavBar from '../NavBar';
import { addToPreferences, logInUser } from '../../actions';

class CensorToolsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showing: false,
    };
  }

  tryLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const { credential } = result;
      const token = credential.accessToken;
      const { user } = result;
      console.log(user, token);
      this.props.logInUser(user, token);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  addPref = (prefLetter) => {
    const list = this.props.filterTypes;
    if (this.props.username !== '') {
      if (!list.includes(prefLetter)) {
        list.push(prefLetter);
      } else if (list.length !== 1) {
        list.splice(list.indexOf(prefLetter), 1);
      }
      this.props.addToPreferences(this.props.username, list, this.props.chosenFilters);
    } else {
      this.tryLogin();
    }
  }

  removeWord = (word) => {
    if (this.props.username !== '' && this.props.chosenFilter.includes(word)) {
      const list = this.props.chosenFilter;
      list.splice(list.indexOf(word), 1);
      this.props.addToPreferences(this.props.username, this.props.filterTypes, list);
    }
  }

  findWord = (prefLetter) => {
    if (this.props.filterTypes.includes(prefLetter)) {
      return 'remove';
    } else {
      return 'add';
    }
  }

  updateInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  submitCustomWord = () => {
    if (this.state.input !== '' && this.props.username !== '') {
      const list = this.props.chosenFilter;
      if (!list.includes(this.state.input)) {
        list.push(this.state.input);
        this.props.addToPreferences(this.props.username, this.props.filterTypes, list);
        $('.custom-word-input').val('');
        this.setState({
          input: '',
        });
      }
    } else if (this.props.username === '') {
      this.tryLogin();
    }
  }

  changeShowing = () => {
    if (this.props.username === '') {
      this.tryLogin();
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          showing: !prevState.showing,
        };
      });
    }
  }

  determineShowing = () => {
    if (this.state.showing) {
      return 'Hide chosen words';
    }
    return 'Show chosen words';
  }

  render() {
    return (
      <div className="screen-main">
        <NavBar />
        <div className="background" />
        <div className="title">Chrome Extension</div>
        <p className="smaller-text">Take control of your internet experience with our Chrome extension that will warn you if a page contains any harmful language that you’ve
          instructed it to look out for.
          Think of it like a live content warning for the web! If the we find any of the words in a word set you’ve selected, we’ll blur it out on the page unless you choose to reveal them.
        </p>
        <button type="button" className="nav-button outline chrome">Get the Chrome extension</button>
        <div className="title">Word Sets</div>
        <div className="word-sets">
          <div className="row">
            <div className="set">
              <div className="set-title">Homophobic</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline" onClick={() => { this.addPref('h'); }}>{ this.props.filterTypes.includes('h') ? 'remove' : 'add'}</div>
            </div>
            <div className="set">
              <div className="set-title">Transphobic</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline" onClick={() => { this.addPref('t'); }}>{ this.props.filterTypes.includes('t') ? 'remove' : 'add'}</div>
            </div>
          </div>
          <div className="row">
            <div className="set">
              <div className="set-title">Racist</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline" onClick={() => { this.addPref('r'); }}>{ this.props.filterTypes.includes('r') ? 'remove' : 'add'}</div>
            </div>
            <div className="set">
              <div className="set-title">Sexist</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline" onClick={() => { this.addPref('s'); }}>{ this.props.filterTypes.includes('s') ? 'remove' : 'add'}</div>
            </div>
            <div className="set">
              <div className="set-title">Anti-Semetic</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline" onClick={() => { this.addPref('a'); }}>{ this.props.filterTypes.includes('a') ? 'remove' : 'add'}</div>
            </div>
          </div>
        </div>
        <section className="chosen-words-section">
          <div className="title" id="add-custom-words">Add Custom Words</div>
          <div className="smaller-text" id="add-custom-words-subtext">lorem lorem lorem</div>
          <div className="custom-input">
            <input className="custom-word-input" placeholder="Input any word" onChange={(e) => { this.updateInput(e); }} />
            <div className="input-button-wrapper">
              <button type="button" id="button-rounded" className="input-button" onClick={this.submitCustomWord}>Add word</button>
            </div>
          </div>
        </section>
        <section className="chosen-words-list">
          <div className="show-all-words" onClick={this.changeShowing}>
            {this.determineShowing()}
          </div>
          <div className="words-list">
            {this.props.chosenFilter.map((word) => {
              const hidden = this.state.showing ? 'visible-word' : 'hidden-word';
              return (
                <div className={`words-item ${hidden}`}>
                  <div className={`word ${hidden}`}> {word} </div>
                  <button type="button" className={`nav-button outline remove-button ${hidden}`} onClick={() => { this.removeWord(word); }}>delete</button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    chosenFilter: state.user.chosenFilter,
    filterTypes: state.user.filterTypes,
  };
}

export default connect(mapStateToProps, { addToPreferences, logInUser })(CensorToolsScreen);
