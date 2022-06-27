import PropTypes from 'prop-types';
import { isOdd, isSimple } from './additionals';

const Number = ({ value }) => {
  const numberStyle = num => {
    if (isSimple(num)) {
      return {
        backgroundColor: '#ff6b6b',
      };
    }
    if (isOdd(num)) {
      return {
        backgroundColor: '#fcc419',
      };
    }
  };

  return (
    <div className="number" style={numberStyle(value)}>
      {value}
    </div>
  );
};

Number.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Number;
