'use client';
import React from 'react';
import './meter.css';
import GaugeChart from 'react-gauge-chart';

interface MeterProps {
  label: string;
  value: number;   // e.g., 76.6
  min: number;     // e.g., 0
  max: number;     // e.g., 120
  unit?: string;   // ✅ optional unit (%, °C, hPa, etc.)
}

const Meter: React.FC<MeterProps> = ({ label, value, min, max, unit = '%' }) => {
  const percent = (value - min) / (max - min);

  return (
    <div className="metercontainer">
      <div className="metercss">
        <GaugeChart
          id={`${label.toLowerCase()}-gauge`}
          nrOfLevels={120}
          arcsLength={[0.3, 0.4, 0.3]}
          colors={['#d6a400', '#f59e0b', '#ea580c']}
          percent={percent}
          arcPadding={0.02}
          textColor="#ea580c"
          needleColor="#ea580c"
          width={200}
        />
      </div>
      <div className="meter-label">{label.toUpperCase()}</div>
      <div className="meter-value">{value.toFixed(1)}{unit}</div>
    </div>
  );
};

export default Meter;
