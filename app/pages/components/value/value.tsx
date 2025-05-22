import React from 'react';
import './value.css';

interface ValueProps {
  imageSrc: string;
  label: string;
  value: string | number;
}

const Value: React.FC<ValueProps> = ({ imageSrc, label, value }) => {
  return (
    <div className="valuecontainer">
      <img src={imageSrc} alt={label} />
      <h4>{label}</h4>
      <h3>{value}</h3>
    </div>
  );
};

export default Value;
