import './form.css';
import Input from './Input';

import { inputData } from './inputData';

const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const formInputs = inputData.map((input) => {
    return <Input key={input.id} {...input} />;
  });

  return (
    <div className="login-password">
      <form className="form" onSubmit={onFormSubmit}>
        {formInputs}
        <button className="form__btn">Sign in</button>
      </form>
    </div>
  );
};

export default Form;
