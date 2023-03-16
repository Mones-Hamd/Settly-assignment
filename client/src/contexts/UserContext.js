import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [capatchaValue, setCapatchaValue] = useState('');
  useEffect(() => {
    const existingProfile = JSON.parse(localStorage.getItem('profile'));
    if (existingProfile) {
      setProfile(existingProfile);
    }
  }, []);

  const value = { profile, setProfile, capatchaValue, setCapatchaValue };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
