/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class CensorToolsScreen extends Component {
  render() {
    return (
      <div className="screen-main">
        <div className="title">Strikethru Tools</div>
        <p className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nunc sit amet venenatis fringilla,
          libero nisi faucibus dui, eget suscipit enim augue quis sapien.
          Vivamus scelerisque risus sed risus euismod vehicula at a ipsum. Donec porttitor velit quis felis vestibulum, non rhoncus libero facilisis.
        </p>
        <button type="button" className="nav-button outline chrome">Get the Chrome extension</button>
        <div className="title">Word Sets</div>
        <div className="word-sets">
          <div className="row">
            <div className="set">
              <div className="set-title">Homophobic</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline">add</div>
            </div>
            <div className="set">
              <div className="set-title">Transphobic</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline">add</div>
            </div>
          </div>
          <div className="row">
            <div className="set">
              <div className="set-title">Racist</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline">add</div>
            </div>
            <div className="set">
              <div className="set-title">Sexist</div>
              <div className="set-wordset">Word Set</div>
              <div className="nav-button outline add">add</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CensorToolsScreen;
