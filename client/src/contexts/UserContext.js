import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    const existingProfile = JSON.parse(localStorage.getItem('profile'));
    if (existingProfile) {
      setProfile(existingProfile);
    }
  }, []);

  const value = { profile, setProfile };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
