import { useState } from 'react';

const validEmail = new RegExp(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
const validPassword = 6;

const useInput = (value) => {
  const [inputValue, setInputValue] = useState(value);
  const [errorMessage, setErrorMessage] = useState('');

  const onBlur = (event) => {
    const { name, value } = event.target;

    if (name === 'password' && value.length < validPassword) {
      setErrorMessage('Password should be at least 6 characters');
    } else {
      setErrorMessage('');
    }

    if (name === 'email' && !value.match(validEmail)) {
      setErrorMessage('Email should be valid');
    }

    !inputValue && setErrorMessage(`Please, fill ${name} field`);
  };

  const onChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return {
    inputValue,
    errorMessage,
    onBlur,
    onChange,
  };
};

export default useInput;
