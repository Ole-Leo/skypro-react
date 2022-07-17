import { useEffect } from 'react';
import useInput from './useInput';

const Input = ({ ...input }) => {
  const inputProps = useInput('');

  useEffect(() => {
    const ref = inputProps.inputRef;
    if (ref.current.name === 'email') {
      ref.current.focus();
    }
  }, [inputProps.inputRef]);

  return (
    <>
      <div className="input-content">
        <label htmlFor={input.name} className="label">
          {input.text}
        </label>
        <input
          className="form__input"
          name={input.name}
          type={input.type}
          placeholder={input.text}
          onBlur={inputProps.onBlur}
          ref={inputProps.inputRef}
          onKeyDown={inputProps.onKeyDown}
        />

        <span className="alert">{inputProps.errorMessage}</span>
      </div>
    </>
  );
};

export default Input;
