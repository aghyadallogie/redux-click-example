import React from 'react';

function Rectangle(props) {
  return (
    <div className="rect">
      <h5>RECTANGLE.JS</h5>
      <p>You clicked the circle {props.data} times</p>
    </div>
  );
}

export default Rectangle;
