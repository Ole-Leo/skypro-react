import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

const Color = ({ text, style }) => {
  const [colorText, setColorText] = useState(text);
  const ref = useRef(null);

  useEffect(() => {
    const colorRef = ref.current;

    const getColorCopy = (event) => {
      const { innerText } = event.target;
      navigator.clipboard.writeText(innerText);
      setColorText('Copied!');
      setTimeout(() => {
        setColorText(colorText);
      }, 600);
    };

    colorRef.addEventListener('click', getColorCopy);

    return function clear() {
      colorRef.removeEventListener('click', getColorCopy);
    };
  }, [colorText]);

  return (
    <div ref={ref} className="color" style={style}>
      {colorText}
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
