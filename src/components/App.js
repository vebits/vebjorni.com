import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NProgress from 'nprogress';

import '../../sass/main.scss';

import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    NProgress.configure({
      speed: 500,
      showSpinner: false
    });
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return(
      <BrowserRouter>
          <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }

}

export default App;
