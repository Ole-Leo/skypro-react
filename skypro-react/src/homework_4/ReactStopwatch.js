import React from 'react';
import { millisecond, second, minute } from './additional';

export default class ReactStopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isCounting: false,
    };
  }

  startHandler = () => {
    this.setState({ isCounting: true });
    this.stopwatch = setInterval(() => this.increment(), 10);
  };

  stopHandler = () => {
    this.setState({ isCounting: false });
    clearInterval(this.stopwatch);
  };

  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  componentDidUpdate(prevState) {
    if (prevState.counter !== this.state.counter) {
      this.increment = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
      };
    }
  }

  componentWillUnmount() {
    clearInterval(this.stopwatch);
  }

  render() {
    const counter = this.state.counter;

    return (
      <div>
        <h1>React Stopwatch</h1>
        <h2>
          <span>{minute(counter)}:</span>
          <span>{second(counter)}.</span>
          <span>{millisecond(counter)}</span>
        </h2>
        {this.state.isCounting ? (
          <button onClick={this.stopHandler}>Stop</button>
        ) : (
          <button onClick={this.startHandler}>Start</button>
        )}
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}
