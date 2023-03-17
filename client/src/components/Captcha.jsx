import React, { useContext } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CaptchaContext } from '../contexts/CaptchaContext';

const Captcha = () => {
  const { setCaptchaValue, captchaRef } = useContext(CaptchaContext);
  const onChange = async (value) => {
    await setCaptchaValue(value);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6LcbWAIlAAAAAK6Y8NOiAdK0gkLFRs1IN-IJDe3j"
        onChange={onChange}
        ref={captchaRef}
      />
      ,
    </div>
  );
};

export default Captcha;
