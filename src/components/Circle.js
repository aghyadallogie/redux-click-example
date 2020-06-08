import React from 'react';
import { connect } from 'react-redux';
import { updateClicks } from '../actions';

function Circle(props) {
  console.log('CIRCLE.JS PROPS: ', props);
  return (
    <div className="circle" onClick={() => props.updateClicks('steve')}>
      <h5>CIRCLE.JS</h5>
      <p>You clicked {props.clicked} times</p>
    </div>
  );
}

const mapsStateToProps = (state) => {
  console.log('CIRCLE.JS: I got the new state: ', state);
  return state;
};

export default connect(mapsStateToProps, { updateClicks })(Circle);
