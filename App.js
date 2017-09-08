'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory, Link} from 'react-router';
import Home from './home/home';
import Mine from './mine/mine';
import Login from './login/login';
import NavBar from './common/NavBar/NavBar';
import '../styles/reset.scss';
import '../styles/rem.scss';

injectTapEventPlugin();


//最终渲染
ReactDom.render((
  <div>
    <Router history={hashHistory}>
      <Route path='/' component={Home}></Route>
      <Route path='/mine' component={Mine}/>
      <Route path='/login' component={Login}/>
    </Router>
    <NavBar></NavBar>
  </div>
), document.getElementById('app'));
