import React from 'react';
import './system.css';

interface SystemProps {
  name: string;
  status: string;
}

const System: React.FC<SystemProps> = ({ name, status }) => {
  return (
    <div className='systemcontainer'>
      <h4>{name}</h4>
      <h3>STATUS: {status}</h3>
    </div>
  );
};

export default System;
