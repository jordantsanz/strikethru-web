/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar';

class Home extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="main-container">
        <NavBar />
        <div className="background" />
        <section className="section-1">
          <div className="purify">Purify the web.</div>
        </section>
        <section className="section-2">
          <div className="home-section-texts">
            <div className="section-title">The web is no safe space.</div>
            <div className="smaller-text">The internet is great, but sometimes it’s not. 53% of Americans say they’ve experienced hate speech of
              harassment online. And this harmful language can be especially targeted at people of certain
              identities: 8 in 10 LGBTQ+ people in the UK have experienced hate speech or hateful language online.
              These encounters are not victimless either, leaving their targets with a psychological toll.
              But what if we could mitigate part of this process?
            </div>
          </div>
          <div className="home-section-texts">
            <div className="section-title">Hide the harm.</div>
            <div className="smaller-text">
              Unfortunately, many websites and social media platforms do not give users the ability
              to properly protect themselves from harm and harassment on their services, with most
              only allowing for blocking and reporting features.
              But what if users were empowered to take control of their feed? Now they can.
            </div>
            <button type="button" className="nav-button outline margin-top">View the Chrome extension</button>
          </div>
          <div className="home-section-texts">
            <div className="section-title">Screen your documents</div>
            <div className="smaller-text">
              Respect on the internet is a two-way street: we must also be mindful in the content we are
              putting out on the internet. To assist in making your contributions more safe, strikethru
              can look through .txt files for either individual harmful words that match our database
              or sentences predicted to contain hateful speech sentiment.
            </div>
            <button type="button" className="nav-button outline margin-top">View the document filter</button>
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
