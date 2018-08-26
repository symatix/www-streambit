import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import initStore from './init';
import './index.css';
import App from './components/App/App';

const store = createStore(reducers, initStore);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
, document.getElementById('root'));
