import React from 'react';
import incrementClicks from '../myredux/Actions';
import { connect } from 'react-redux';


function Circle(props) {
  console.log(props);

  return (
    <div className="circle" onClick={props.incrementClicks}>
      <h5>CIRCLE.JS</h5>
      <p>You clicked {props.data} times</p>
    </div>
  );
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { incrementClicks })(Circle);
