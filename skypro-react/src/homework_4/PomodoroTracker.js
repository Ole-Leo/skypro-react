import React from 'react';
import { second, minute } from './additional';

const oneMinute = 6000;

const tracker = {
  'work-time': 30 * oneMinute,
  'long-break': 15 * oneMinute,
  'short-break': 7 * oneMinute,
};

export default class PomodoroTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isCounting: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate(prevState) {
    if (prevState.counter !== this.state.counter) {
      this.decrement = this.decrement.bind(this);
    }
  }

  decrement = () => {
    if (this.state.counter === 0) {
      clearInterval(this.timer);

      this.setState(() => ({
        isCounting: false,
      }));

      return;
    }
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  stopHandler = () => {
    this.setState({ isCounting: false });
    clearInterval(this.timer);
  };

  startHandler = (event) => {
    clearInterval(this.timer);
    const targetAttr = event.target.dataset.status;

    if (targetAttr === 'work') {
      this.setState({ counter: tracker['work-time'], isCounting: true });
    }
    if (targetAttr === 'long-break') {
      this.setState({ counter: tracker['long-break'], isCounting: true });
    }
    if (targetAttr === 'short-break') {
      this.setState({ counter: tracker['short-break'], isCounting: true });
    }

    this.timer = setInterval(() => this.decrement(), 10);
  };

  render() {
    const counter = this.state.counter;
    return (
      <>
        <h1>Pomodoro Tracker</h1>
        <h2>
          <span>{minute(counter)}:</span>
          <span>{second(counter)}</span>
        </h2>
        {this.state.isCounting ? (
          <button onClick={this.stopHandler}>Stop</button>
        ) : (
          <div>
            <button data-status="work" onClick={this.startHandler}>
              Work Time
            </button>
            <button data-status="long-break" onClick={this.startHandler}>
              Long Break
            </button>
            <button data-status="short-break" onClick={this.startHandler}>
              Short Break
            </button>
          </div>
        )}
      </>
    );
  }
}
