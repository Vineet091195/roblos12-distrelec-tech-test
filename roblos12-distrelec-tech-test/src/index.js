import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import './scss/distrelec.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './redux/reducers/reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
