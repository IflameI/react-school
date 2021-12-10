import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { Loader } from './components';
import { persistedStore, store } from './redux/store';

import './styles/styles.scss';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
