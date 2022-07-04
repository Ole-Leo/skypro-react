import useInputRequired from './useInputRequired';

const Input = ({ type, name, text }) => {
  const inputCopy = useInputRequired('');

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
        {inputCopy.isError && (
          <span className="alert">{`We still need your ${text}`}</span>
        )}
      </div>
    </>
  );
};

export default Input;
