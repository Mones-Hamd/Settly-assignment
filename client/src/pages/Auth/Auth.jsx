import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Captcha from '../../components/Captcha';
import Error from '../../components/Error/Error';
import Input from '../../components/Input/Input';
import Loading from '../../components/Loading/Loading';
import FIELDS from '../../constant/Fields';
import { CaptchaContext } from '../../contexts/CaptchaContext';
import useAuth from '../../hooks/useAuth';
import useFrom from '../../hooks/useForm';
import './auth.css';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { formData, handleChange } = useFrom({});
  const { isLoading, isSuccess, message, perform, setMessage } = useAuth();
  const navigate = useNavigate();
  const { captchaValue, captchaRef } = useContext(CaptchaContext);
  const switchMode = (e) => {
    e.preventDefault();
    setIsRegister((prev) => !prev);
    setMessage(null);
  };

  const seedInputData = isRegister
    ? FIELDS.REGISTER_FIELDS
    : FIELDS.LOGIN_FIELDS;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      captchaRef.current.reset();
      perform('register', { ...formData, captchaValue });
    } else {
      perform('login', formData);
    }
  };
  useEffect(() => {
    if (isSuccess) navigate('/home');
  });
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-app">
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
        {isRegister && <Captcha />}
        <button type="submit" className="btn-app">
          {isRegister ? 'CREATE ACCOUNT' : 'LOGIN'}
        </button>
        <p className="text-app">
          {isRegister ? 'Already ' : 'No account yet? '}
          <a href="auth" onClick={(e) => switchMode(e)}>
            {isRegister ? 'have an account ' : 'Create one here.'}
          </a>

          {!isSuccess && message && <Error message={message} />}
        </p>
      </form>
    </div>
  );
};

export default Auth;
