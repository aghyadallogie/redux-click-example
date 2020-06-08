import React from 'react';
import { connect } from 'react-redux';

function Rectangle(props) {
  console.log('RECTANGLE.JS PROPS: ', props);
  return (
    <div className="rect">
      <h5>RECTANGLE.JS</h5>
      <p>You clicked the circle {props.clicked} times</p>
    </div>
  );
}

const mapsStateToProps = (state) => {
  console.log('RECTANGLE.JS: I got the new state: ', state);
  return state;
};

export default connect(mapsStateToProps)(Rectangle);
