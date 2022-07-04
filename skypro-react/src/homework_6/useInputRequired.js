import { useState } from 'react';

const useInputRequired = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isError, setIsError] = useState(false);

  const onBlurChange = () => {
    setIsError(!inputValue && true);
  };

  const onValueChange = (event) => {
    const targetVal = event.target.value;
    setInputValue(targetVal);
    setIsError(inputValue && false);
  };

  return {
    inputValue,
    isError,
    onBlurChange,
    onValueChange,
  };
};

export default useInputRequired;
