import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Counter = ({ min = 1, max, value, onAmountChange }) => {
  const [counter, setCounter] = useState(value);
  const changeCount = (event) => {
    let inputValue = parseInt(event.target.value, 10);
    if (inputValue > max) inputValue = max;
    if (inputValue < min) inputValue = min;
    setCounter(isNaN(inputValue) ? min : inputValue);
  };

  useEffect(() => {
    onAmountChange(counter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const decrement = () => {
    setCounter((prevCount) => (prevCount === min ? min : prevCount - 1));
  };

  const increment = () => {
    setCounter((prevCount) => (prevCount === max ? max : prevCount + 1));
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <input
        className="counter__input"
        type="text"
        value={counter}
        onChange={changeCount}
      />
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onAmountChange: PropTypes.func,
};

export default Counter;
