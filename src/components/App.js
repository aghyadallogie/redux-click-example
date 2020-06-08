import React from 'react';
import '../scss/App.scss';
import Rectangle from './Rectangle';
import Circle from './Circle';
import { connect } from 'react-redux';

const App = (props) => {
  console.log('APP.JS PROPS: ', props);
  return (
    <div className="app">
      <div className="parent">
        <h5>APP.JS</h5>
        <p>You clicked {props.clicked} times</p>
      </div>
      <Rectangle></Rectangle>
      <Circle></Circle>
    </div>
  );
};

const mapsStateToProps = (state) => {
  console.log('APP.JS: I got the new state: ', state);
  return state;
};

export default connect(mapsStateToProps)(App);
