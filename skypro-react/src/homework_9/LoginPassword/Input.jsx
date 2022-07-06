import useInput from './useInput';

const Input = ({ ...input }) => {
  const inputProps = useInput('');

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
          onChange={(event) => inputProps.onChange(event)}
          value={inputProps.inputValue}
          onBlur={(event) => inputProps.onBlur(event)}
        />

        <span className="alert">{inputProps.errorMessage}</span>
      </div>
    </>
  );
};

export default Input;
