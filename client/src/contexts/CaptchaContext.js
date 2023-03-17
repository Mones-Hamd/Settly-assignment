import { createContext, useRef, useState } from 'react';

export const CaptchaContext = createContext();
export const CaptchaProvider = ({ children }) => {
  const [captchaValue, setCaptchaValue] = useState('');
  const captchaRef = useRef();
  const value = { captchaRef, captchaValue, setCaptchaValue };
  return (
    <CaptchaContext.Provider value={value}>{children}</CaptchaContext.Provider>
  );
};
