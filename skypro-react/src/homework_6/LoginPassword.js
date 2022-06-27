import Input from './Input';

const LoginPassword = () => {
  const formData = [
    {
      id: '1',
      type: 'text',
      name: 'login',
      text: 'Login',
    },
    {
      id: '2',
      type: 'password',
      name: 'password',
      text: 'Password',
    },
  ];

  const formInputs = formData.map((formInput) => (
    <Input
      name={formInput.name}
      type={formInput.type}
      text={formInput.text}
      key={formInput.id}
    />
  ));

  return <div className="login-password">{formInputs}</div>;
};

export default LoginPassword;
