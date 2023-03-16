import { createContext, useRef, useState } from 'react';

export const CapatchaContext = createContext();
export const CapatchaProvider = ({ children }) => {
  const [capatchaValue, setCapatchaValue] = useState('');
  const capatchaRef = useRef();
  const value = { capatchaRef, capatchaValue, setCapatchaValue };
  return (
    <CapatchaContext.Provider value={value}>
      {children}
    </CapatchaContext.Provider>
  );
};
