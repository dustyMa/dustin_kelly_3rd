import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="cute-button" onClick={() => navigate('/letter')}>
        💌 Click me!
      </button>
    </div>
  );
}

export default Home;