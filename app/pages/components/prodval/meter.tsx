'use client';
import React from 'react';
import './meter.css';
import GaugeChart from 'react-gauge-chart';

interface MeterProps {
  label: string;
  value: number;   // e.g., 76.6
  min: number;     // e.g., 0
  max: number;     // e.g., 120
  image: string;
  unit: string;
}

const Meter: React.FC<MeterProps> = ({ label, value, min, max, image, unit }) => {
  const percent = (value - min) / (max - min);

  return (
    <div className="custom-meter-container">
      <div className="custom-meter-image-wrapper">
        <img src={image} alt={`${label} icon`} />
      </div>
      <div className="custom-meter-label">{label.toUpperCase()}</div>
      <div className="custom-meter-value">{value.toFixed(1)} {unit}</div>
    </div>
  );
};

export default Meter;
