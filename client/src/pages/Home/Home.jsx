import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './home.css';

const Home = () => {
  const { profile } = useContext(UserContext);

  return (
    <div class="welcome-message">
      <h1>
        Hi <span class="name">{profile.name}</span>,
      </h1>
      <p>Welcome to your admin account.</p>
    </div>
  );
};

export default Home;
