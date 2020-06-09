import React from 'react';
import { connect } from 'react-redux';
import '../scss/App.scss';
import Rectangle from './Rectangle';
import Circle from './Circle';

const App = ({ clicked }) => {
  return (
    <div className="app">
      <div className="parent">
        <h5>APP.JS</h5>
        <p>You clicked {clicked} times</p>
      </div>
      <Rectangle></Rectangle>
      <Circle></Circle>
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);
