import { useState } from 'react';
import Color from './Color';
import './palette.css';
import { newArr } from './utilities';

const Palette = () => {
  const [colors, setColors] = useState(newArr(25));

  const colorsArr = colors.map((color) => (
    <Color key={color} text={color} style={{ backgroundColor: color }} />
  ));

  const clickHandler = () => {
    setColors(newArr(25));
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
