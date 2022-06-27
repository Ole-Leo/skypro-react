import { useState } from 'react';

const useInputReq = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isRequired, setIsRequired] = useState(false);

  const onBlurChange = () => {
    setIsRequired(inputValue === '' && { isRequired: true });
  };

  const onValueChange = (event) => {
    const targetVal = event.target.value;
    setInputValue(targetVal);
  };

  return {
    inputValue,
    isRequired,
    onBlurChange,
    onValueChange,
  };
};

const Input = ({ type, name, text }) => {
  const inputCopy = useInputReq('');

  return (
    <>
      <div className="input-content">
        <label htmlFor={name} className="label">
          {text}
        </label>
        <input
          className="input"
          name={name}
          type={type}
          id={name}
          placeholder={text}
          value={inputCopy.inputValue}
          onChange={inputCopy.onValueChange}
          onBlur={inputCopy.onBlurChange}
        />
        {inputCopy.isRequired && (
          <span className="alert">{`We still need your ${text}`}</span>
        )}
      </div>
    </>
  );
};

export default Input;
