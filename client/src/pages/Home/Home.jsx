import React from 'react';
import { Navigate } from 'react-router-dom';

import './home.css';

const Home = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));

  return profile ? (
    <div className="welcome-message">
      <h1>
        Hi <span className="name">{profile.firstName}</span>,
      </h1>
      <p>Welcome to your admin account.</p>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Home;
