import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

  render() {
    return(
      <div className="container">
        <div className="header">
          <a href="https://vebjorni.com">vebjorni.com</a>
          <div>(<a href="https://github.com/vebjorni/vebjorni.com" target="_blank">src</a>)</div>
        </div>
        <div className="center-items">
          <div className="name">Vebjørn Isaksen</div>
          <div className="some-links">
            <a href="https://linkedin.com/in/vebjorni" target="_blank">LinkedIn</a>
            <a href="https://github.com/vebjorni" target="_blank">Github</a>
            <a href="https://twitter.com/vebjorni" target="_blank">Twitter</a>
            <a href="mailto:vebjorni@me.com" target="_blank">Email</a>
            <a href="https://www.dropbox.com/s/9jicsfpnwhdjvfg/resume.pdf?dl=0" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
