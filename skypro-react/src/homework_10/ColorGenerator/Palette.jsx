import { useState } from 'react';
import Color from './Color';
import './palette.css';
import { newArr } from './utilities';

const arrLength = 25;

const Palette = () => {
  const [colors, setColors] = useState(() => newArr(arrLength));

  const getColorCopy = (event) => {
    const { innerText } = event.target;
    navigator.clipboard
      .writeText(innerText)
      .then(alert(`${innerText} copied!`))
      .catch(() => {
        alert('something went wrong');
      });
  };

  const colorsArr = colors.map((color) => (
    <Color
      key={color}
      text={color}
      style={{ backgroundColor: color }}
      onColorClick={getColorCopy}
    />
  ));

  const clickHandler = () => {
    setColors(newArr(arrLength));
  };

  return (
    <div className="container">
      <button className="color-generate-btn" onClick={clickHandler}>
        Generate color
      </button>

      <div className="colors">{colorsArr}</div>
    </div>
  );
};

export default Palette;
