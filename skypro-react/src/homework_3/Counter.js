import React from 'react';

const min = 0;
const max = 10;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 1 };
  }

  increment = () => {
    if (this.state.current !== max) {
      this.setState((prevState) => ({ current: prevState.current + 1 }));
    }
  };

  decrement = () => {
    if (this.state.current !== min)
      this.setState((prevState) => ({ current: prevState.current - 1 }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrement}>
          {' '}
          -{' '}
        </button>
        <span>{this.state.current}</span>
        <button type="button" onClick={this.increment}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

export default Counter;
