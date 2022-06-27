import Number from './Number';
import { fillArrayWithNumbers } from './additionals';

const NumberGenerator = () => {
  const numbers = fillArrayWithNumbers(31);

  const numberGenerator = numbers.map(number => (
    <Number value={number} key={number} />
  ));

  return (
    <>
      <h1 className="numbers-title">Number Generator</h1>
      <div className="numbers-container">{numberGenerator}</div>
    </>
  );
};

export default NumberGenerator;
