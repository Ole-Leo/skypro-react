import PropTypes from 'prop-types';

const Color = ({ text, style, onColorClick }) => {
  return (
    <div className="color" style={style} onClick={onColorClick}>
      {text}
    </div>
  );
};

Color.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

export default Color;
