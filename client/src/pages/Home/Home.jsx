import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import './home.css';

const Home = () => {
  const { profile } = useContext(UserContext);

  return profile ? (
    <div className="welcome-message">
      <h1>
        Hi <span className="name">{profile.name}</span>,
      </h1>
      <p>Welcome to your admin account.</p>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Home;
