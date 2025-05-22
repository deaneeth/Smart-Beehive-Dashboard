"use client";
import React, { useEffect, useState } from 'react';
import "./environment.css";
import SideMenu from "../../components/sidemenu/sidemenu";
import Meter from "../../components/meter/meter";
import Value from "../../components/value/value";
import Graph from '../../components/envigraph/envigraph';
import { database } from "../../../firebase-config/firebase";
import { ref, onValue } from "firebase/database";

const Environment = () => {
  const [gasResistance, setGasResistance] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const [humidityHistory, setHumidityHistory] = useState([]);
  const [gasResistanceHistory, setGasResistanceHistory] = useState([]);
  const [pressureHistory, setPressureHistory] = useState([]);
  const [temperatureHistory, setTemperatureHistory] = useState([]);

  const [uptime, setUptime] = useState(0);
  const [wifiStrength, setWifiStrength] = useState(0);

  // Real-time current environmental data
  useEffect(() => {
    const currentRef = ref(database, 'environment/current');
    const unsubscribe = onValue(currentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setGasResistance(parseFloat(data.gas_resistance) || 0);
        setHumidity(parseFloat(data.humidity) || 0);
        setPressure(parseFloat(data.pressure) || 0);
        setTemperature(parseFloat(data.temperature) || 0);
      }
    });
    return () => unsubscribe();
  }, []);

  // Real-time daily average history
  useEffect(() => {
    const historyRef = ref(database, 'environment/history');
    const unsubscribe = onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const humidityArr = [];
        const gasResArr = [];
        const pressureArr = [];
        const tempArr = [];

        Object.entries(data).forEach(([date, entry]) => {
          const avg = entry?.daily_average;
          if (avg) {
            humidityArr.push({ timestamp: date, value: avg.humidity });
            gasResArr.push({ timestamp: date, value: avg.gas_resistance });
            pressureArr.push({ timestamp: date, value: avg.pressure });
            tempArr.push({ timestamp: date, value: avg.temp });
          }
        });

        setHumidityHistory(humidityArr);
        setGasResistanceHistory(gasResArr);
        setPressureHistory(pressureArr);
        setTemperatureHistory(tempArr);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch uptime and wifi strength
  useEffect(() => {
    const statusRef = ref(database, 'system/status');
    const unsubscribe = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.wifi_strength !== undefined) setWifiStrength(data.wifi_strength);
        if (data.sensors?.uptime !== undefined) setUptime(data.sensors.uptime);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='dashboardcss'>
      <SideMenu uptime={uptime} wifiStrength={wifiStrength} />
      <div className='dashboardinfo'>
        <div className='environmentalstatus'>
          <h4>ENVIRONMENT STATUS</h4>
          <div className='environmentalstatuscontainer'>
            <Meter label="Humidity" value={humidity} min={0} max={100} />
            <Meter label="GAS RESISTANCE" value={gasResistance} min={0} max={100} />
            <Meter label="PRESSURE" unit="Ω" value={pressure} min={900} max={10000} />
            <Value imageSrc="/temp.png" label="TEMP" value={`${temperature.toFixed(1)}°`} />
          </div>
        </div>

        <div className='environmentalgraphs'>
          <div className='envitoppart'>
            <div>
              <h4>HUMIDITY HISTORY</h4>
              <div className='envigraph'>
                <Graph data={humidityHistory} color="orange" />
              </div>
            </div>
            <div>
              <h4>GAS RESISTANCE HISTORY</h4>
              <div className='envigraph'>
                <Graph data={gasResistanceHistory} color="orange" />
              </div>
            </div>
          </div>
          <div className='envitoppart'>
            <div>
              <h4>PRESSURE HISTORY</h4>
              <div className='envigraph'>
                <Graph data={pressureHistory} color="orange" />
              </div>
            </div>
            <div>
              <h4>TEMPERATURE HISTORY</h4>
              <div className='envigraph'>
                <Graph data={temperatureHistory} color="orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
