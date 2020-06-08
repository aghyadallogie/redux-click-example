import React from 'react';
import '../scss/App.scss';
import Rectangle from './Rectangle';
import Circle from './Circle';
import { connect } from 'react-redux';
import { updateClicks } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
  }

  somebodyClicked = () => {
    const totalClicks = this.state.clicked + 1;
    this.setState({ clicked: totalClicks });
  };

  render() {
    return (
      <div className="app">
        <div className="parent">
          <h5>APP.JS</h5>
          <p>You clicked {this.state.clicked} times</p>
        </div>
        <Rectangle data={this.state.clicked}></Rectangle>
        <Circle
          handleClick={this.somebodyClicked}
          data={this.state.clicked}
        ></Circle>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return state;
};

export default connect(mapsStateToProps, { updateClicks })(App);
