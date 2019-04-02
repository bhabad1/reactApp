import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux';

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from "./App.jsx";
import rootReducer from '../src/reducer/rootReducer'
import { Home, About, Contact, Other } from "./App";


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
   <Provider store = { store } >
  <Router>
    <div>
      <ul style={{ display: "inline-block" }}>
        <li style={{ padding: "10px", display: "inherit" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ padding: "10px", display: "inherit" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ padding: "10px", display: "inherit" }}>
          <Link to="/contact">Contact</Link>
        </li>
          <li style={{ padding: "10px", display: "inherit" }}>
          <Link to="/other">Other</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/other" component={Other} />
    </div>
  </Router></Provider>,
  document.getElementById("root")
);
