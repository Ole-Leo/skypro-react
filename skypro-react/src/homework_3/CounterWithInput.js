import React from 'react';

const min = 0;
const max = 10;

class CounterWithInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: min };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let inputValue = event.target.value.replace(/\D/gi, '');
    if (inputValue > max) inputValue = max;
    if (inputValue < min) inputValue = min;
    this.setState(() => ({ current: Number(inputValue) }));
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
        <input value={this.state.current} onChange={this.onChange} />
        <button type="button" onClick={this.increment}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

export default CounterWithInput;
