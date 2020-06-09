import React from 'react';
import { connect } from 'react-redux';
import incrementClicks from '../myredux/Actions';

function Rectangle(props) {
  return (
    <div className="rect">
      <h5>RECTANGLE.JS</h5>
      <p>You clicked the circle {props.clicked} times</p>
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { incrementClicks })(Rectangle);
