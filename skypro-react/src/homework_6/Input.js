import { useState } from 'react';

const Input = ({ label, text, type, name }) => {
  const [inputValue, setInputValue] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  const onFocusChange = () => {
    setIsRequired(inputValue === '' && { isRequired: true });
  };

  const onValueChange = event => {
    const targetVal = event.target.value;
    setInputValue(targetVal);
  };

  return (
    <>
      <div className="input-content">
        <label htmlFor={label} className="label">
          {text}
        </label>
        <input
          className="input"
          name={name}
          type={type}
          id={label}
          placeholder={text}
          value={inputValue}
          onChange={onValueChange}
          onBlur={onFocusChange}
        />
        {isRequired && (
          <span className="alert">{`We still need your ${text}`}</span>
        )}
      </div>
    </>
  );
};

export default Input;
