import './counter.css';
import { useState } from 'react';
import { increment, decrement, min, max } from './utilities';

const CounterWithInputFn = () => {
  const [counter, setCounter] = useState(min);

  const changeValue = (event) => {
    let inputValue = event.target.value.replace(/\D/gi, '');
    if (inputValue > max) inputValue = max;
    if (inputValue < min) inputValue = min;
    setCounter(Number(inputValue));
  };

  return (
    <div className="input-container">
      <button
        className="input-btn"
        onClick={() => decrement(counter, setCounter, min)}
      >
        -
      </button>
      <input
        className="input"
        value={counter}
        onChange={(e) => changeValue(e)}
      />
      <button
        className="input-btn"
        onClick={() => increment(counter, setCounter, max)}
      >
        +
      </button>
    </div>
  );
};

export default CounterWithInputFn;
