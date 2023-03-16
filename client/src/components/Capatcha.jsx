import React, { useContext } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CapatchaContext } from '../contexts/CapatchaContext';

const Capatcha = () => {
  const { setCapatchaValue, capatchaRef } = useContext(CapatchaContext);
  const onChange = async (value) => {
    await setCapatchaValue(value);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={onChange}
        ref={capatchaRef}
      />
      ,
    </div>
  );
};

export default Capatcha;
