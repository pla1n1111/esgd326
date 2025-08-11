import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/form');
  };

  return (
    <div className="home">
      <h1>Welcome to Dynamic form builder</h1>
      <button className='btn' onClick={handleNavigate}>FORM</button>
    </div>
  );
};