import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/animate.min.css';
import './static/css/index.css';
import App from './containers/Home/App';
import '../src/containers/Home/App.css';

//const rootElement = document.getElementById('root');

ReactDOM.render(<App />, document.getElementById('root'));

//if (module.hot && process.env.NODE_ENV === 'development') {
//  module.hot.accept('./root', () => {
//    const NextRoot = require('./root').default;
//    ReactDOM.render(<NextRoot />, rootElement);
//  })
//}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
