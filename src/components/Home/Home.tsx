import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/form');
  };

  return (
    <div className="home">
      <h1>Welcome to Dynamic Form Builder</h1>
      <button onClick={handleNavigate}>FORM</button>
    </div>
  );
};