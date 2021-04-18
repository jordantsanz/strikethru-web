/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="main-container">
        <section className="section-1">
          <div className="purify">Purify the web.</div>
        </section>
        <section className="section-2">
          <div className="home-section-texts">
            <div className="section-title">The web is no safe space.</div>
            <div className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nunc sit amet venenatis
              fringilla, libero nisi faucibus dui, eget suscipit enim augue quis sapien. Vivamus scelerisque risus sed risus euismod vehicula at a ipsum. Donec porttitor velit
              quis felis vestibulum, non rhoncus libero facilisis.  Statistics about slurs?
            </div>
          </div>
          <div className="home-section-texts">
            <div className="section-title">Hide the harm.</div>
            <div className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nunc sit amet venenatis fringilla,
              libero nisi faucibus dui, eget suscipit
              enim augue quis sapien. Vivamus scelerisque risus sed risus euismod vehicula
              at a ipsum. Donec porttitor velit quis felis vestibulum, non rhoncus libero facilisis.  Statistics about slurs?
            </div>
            <button type="button" className="nav-button outline margin-top">View the Chrome extension</button>
          </div>
          <div className="home-section-texts">
            <div className="section-title">Screen your documents</div>
            <div className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nunc sit amet venenatis fringilla, libero nisi faucibus dui, eget
              suscipit enim augue quis sapien. Vivamus scelerisque risus sed risus euismod vehicula at a ipsum. Donec porttitor
              velit quis felis vestibulum, non rhoncus libero facilisis.  Statistics about slurs?
            </div>
            <button type="button" className="nav-button outline margin-top">View the Chrome extension</button>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.user.username,
    name: reduxState.user.name,
  };
}

export default connect(mapStateToProps, null)(Home);
