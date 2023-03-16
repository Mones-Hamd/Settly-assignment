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
        sitekey="6LcbWAIlAAAAAK6Y8NOiAdK0gkLFRs1IN-IJDe3j"
        onChange={onChange}
        ref={capatchaRef}
      />
      ,
    </div>
  );
};

export default Capatcha;
