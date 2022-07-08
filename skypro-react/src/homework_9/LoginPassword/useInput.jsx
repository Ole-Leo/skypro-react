import { useState } from 'react';

const validEmail = new RegExp(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
const validPasswordLength = 6;

const useInput = (value) => {
  const [inputValue, setInputValue] = useState(value);
  const [errorMessage, setErrorMessage] = useState('');

  const validation = (name, value) => {
    if (name === 'password' && value.length < validPasswordLength) {
      setErrorMessage(
        `Password should be at least ${validPasswordLength} characters`
      );
    } else {
      setErrorMessage('');
    }

    if (name === 'email' && !value.match(validEmail)) {
      setErrorMessage('Email should be valid');
    }
  };

  const onBlur = (event) => {
    const { name, value } = event.target;
    validation(name, value);
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
