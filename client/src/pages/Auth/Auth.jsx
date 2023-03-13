import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error/Error';
import Input from '../../components/Input/Input';
import Loading from '../../components/Loading/Loading';
import FIELDS from '../../constant/Fields';
import useAuth from '../../hooks/useAuth';
import useFrom from '../../hooks/useForm';
import './auth.css';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { formData, handleChange } = useFrom({});
  const { isLoading, isSuccess, message, perform, error, setMessage } =
    useAuth();
  const navigate = useNavigate();
  const switchMode = (e) => {
    e.preventDefault();
    setIsRegister((prev) => !prev);
    setMessage('');
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
  useEffect(() => {
    if (isSuccess) navigate('/home');
  });
  console.log(message);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="text-header">
          {isLoading && <Loading />}
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

          {error && <Error message={message} />}
        </p>
      </form>
    </div>
  );
};

export default Auth;
