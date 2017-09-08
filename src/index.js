import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router';
import NavBar from 'components/common/NavBar/NavBar';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <div>
  <Routers/>
  <NavBar/>
</div>, document.getElementById('root'));
registerServiceWorker();
