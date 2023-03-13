import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import FIELDS from '../../constant/Fields';
import useAuth from '../../hooks/useAuth';
import useFrom from '../../hooks/useForm';
import './auth.css';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { formData, handleChange } = useFrom({});
  const { isLoading, isSuccess, message, perform, error } = useAuth();
  const switchMode = (e) => {
    e.preventDefault();
    setIsRegister((prev) => !prev);
  };
  const seedInputData = isRegister
    ? FIELDS.REGISTER_FIELDS
    : FIELDS.LOGIN_FIELDS;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      perform('register', formData);
    } else {
      perform('login', formData);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="text-header">
          {isRegister ? 'Create your account' : 'Login'}
        </h1>
        {seedInputData.map(({ name, type, placeholder }) => (
          <Input
            name={name}
            type={type}
            placeholder={placeholder}
            handleChange={handleChange}
            key={name}
          />
        ))}
        <button type="submit" className="submit-button">
          {isRegister ? 'CREATE ACCOUNT' : 'LOGIN'}
        </button>
        <p>
          {isRegister ? 'Already ' : 'No account yet? '}
          <a href="/register" onClick={(e) => switchMode(e)}>
            {isRegister ? 'have an account ' : 'Create one here.'}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Auth;
