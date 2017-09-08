import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import 'common/sass/reset.scss';
// import 'common/sass/rem.scss';
import 'common/sass/app.scss';
import Login from 'components/login/login';
import Mine from 'components/mine/mine';
import Home from 'components/home/home';
import Video from 'components/video/video';


class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/Video" component={Video}/>
        <Route path="/login" component={Login}/>
        <Route path="/mine" component={Mine}/>
      </Router>
    );
  };
}

export default Routers;