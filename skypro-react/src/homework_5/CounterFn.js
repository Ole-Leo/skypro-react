import { useState } from 'react';
import { increment, decrement, min, max } from './additional';

const CounterFn = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <button onClick={() => decrement(counter, setCounter, min)}>-</button>
      <span> {counter} </span>
      <button onClick={() => increment(counter, setCounter, max)}>+</button>
      <hr />
    </>
  );
};

export default CounterFn;
