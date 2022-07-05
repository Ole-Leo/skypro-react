import PropTypes from 'prop-types';
import { numberStyle } from './additionals';

const Number = ({ value }) => {
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
