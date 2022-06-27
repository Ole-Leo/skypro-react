import { useState } from 'react';
import { increment, decrement, min, max } from './additional';

const CounterWithInputFn = () => {
  const [counter, setCounter] = useState(min);

  const changeValue = (event) => {
    let inputValue = event.target.value.replace(/\D/gi, '');
    if (inputValue > max) inputValue = max;
    if (inputValue < min) inputValue = min;
    setCounter(Number(inputValue));
  };

  return (
    <>
      <button onClick={() => decrement(counter, setCounter, min)}>-</button>
      <input value={counter} onChange={changeValue} />
      <button onClick={() => increment(counter, setCounter, max)}>+</button>
      <hr />
    </>
  );
};

export default CounterWithInputFn;
