import { useState, useRef } from 'react';

const validEmail = new RegExp(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
const validPasswordLength = 6;

const useInput = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

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
    !value && setErrorMessage(`Please, fill ${name} field`);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onBlur(event);
    }
  };

  return {
    inputRef,
    errorMessage,
    onBlur,
    onKeyDown,
  };
};

export default useInput;
