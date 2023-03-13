import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const { profile } = useContext(UserContext);

  return <div>Hello {profile?.name}</div>;
};

export default Home;
