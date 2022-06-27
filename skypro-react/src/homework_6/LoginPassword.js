import Input from './Input';

const LoginPassword = () => {
  return (
    <div className="login-password">
      <Input name="login" type="text" text="Login" label="login" />
      <Input name="password" type="password" text="Password" label="password" />
    </div>
  );
};

export default LoginPassword;
