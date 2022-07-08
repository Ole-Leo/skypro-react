import './select.css';
import { useState } from 'react';
import { colors } from './colors';

const Select = () => {
  const [selectValue, setSelectValue] = useState('');

  const text = colors.find((color) => color.name === selectValue);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  const textStyle = {
    border: `2px solid ${text?.name.replace(/\s+/g, '')}`,
  };

  return (
    <div className="container">
      <label>
        What do different branding colors mean?
        <select
          className="select"
          value={selectValue}
          onChange={onChangeHandler}
        >
          {colors.map((color) => (
            <option key={color.name} value={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </label>
      {text?.description && (
        <p className="text" style={textStyle}>
          {text.description}
        </p>
      )}
    </div>
  );
};

export default Select;
