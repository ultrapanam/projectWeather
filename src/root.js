import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import { Provider } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import { Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Raven from 'raven-js';
import store from './store';

import Routes from './routes';

if (process.env.NODE_ENV === 'production') {
  Raven.config(process.env.REACT_APP_SENTRY_URL).install();
}

const history = createHistory();

const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <Router history={history}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  </AlertProvider>
)

export default Root;
