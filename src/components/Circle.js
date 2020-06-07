import React from 'react';

function Circle(props) {
  return (
    <div className="circle" onClick={props.handleClick}>
      <h5>CIRCLE.JS</h5>
      <p>You clicked {props.data} times</p>
    </div>
  );
}

export default Circle;
