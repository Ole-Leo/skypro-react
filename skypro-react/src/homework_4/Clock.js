import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <hr />
        <h1>Time:</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
        <hr />
      </div>
    );
  }
}
