"use client";
import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database as db } from "../../firebase-config/firebase";

import SideMenu from "../components/sidemenu/sidemenu";
import './dashboard.css';
import Meter from "../components/meter/meter";
import Value from "../components/value/value";
import ProdVal from "../components/prodval/meter";
import MapComponent from '../components/map/map';
import System from '../components/system/system';
import Notification from '../components/notification/notification';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [beeCount, setBeeCount] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [batteryVoltage, setBatteryVoltage] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [wifiStrength, setWifiStrength] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [gasResistance, setGasResistance] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [satellites, setSatellites] = useState(0);
  const [uptime, setUptime] = useState(0);

  const [sensorStatus, setSensorStatus] = useState({
    bme680: 'unknown',
    gps: 'unknown',
    ir1: 'unknown',
    ir2: 'unknown',
    loadcell: 'unknown',
  });

  const [lowBattery, setLowBattery] = useState(false);
  const [motionActive, setMotionActive] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      onValue(ref(db, 'beeActivity/current'), (snapshot) => {
        const data = snapshot.val();
        if (data?.count !== undefined) setBeeCount(data.count);
      }, (error) => {
        console.error("Error fetching bee activity:", error);
        setError("Failed to load bee activity data");
      });

      onValue(ref(db, 'weight/current/net_weight'), (snapshot) => {
        const value = snapshot.val();
        if (value !== undefined && value !== null) {
          setCurrentWeight(Math.abs(value));
        }
      });

      onValue(ref(db, 'system/power/current'), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setBatteryVoltage(data.voltage || 0);
          setIsCharging(data.charging || false);
        }
      });

      onValue(ref(db, 'alerts/current/battery'), (snapshot) => {
        const data = snapshot.val();
        if (data?.low_battery !== undefined) setLowBattery(data.low_battery);
      });

      onValue(ref(db, 'alerts/current/motion'), (snapshot) => {
        const data = snapshot.val();
        if (data?.active !== undefined) setMotionActive(data.active);
      });

      onValue(ref(db, 'system/status'), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          if (data.wifi_strength !== undefined) setWifiStrength(data.wifi_strength);
          if (data.uptime !== undefined) setUptime(data.uptime);
          if (data.sensors) {
            setSensorStatus({
              bme680: data.sensors.bme680 === 'ok' ? 'Running..' : 'Error',
              gps: data.sensors.gps === 'ok' ? 'Running..' : 'Error',
              ir1: data.sensors.ir_sensors_1 === 'ok' ? 'Running..' : 'Error',
              ir2: data.sensors.ir_sensors_2 === 'ok' ? 'Running..' : 'Error',
              loadcell: data.sensors.loadcell === 'ok' ? 'Running..' : 'Error',
            });
          }
        }
      });

      onValue(ref(db, 'environment/current'), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setHumidity(data.humidity || 0);
          setGasResistance(data.gas_resistance || 0);
          setPressure(data.pressure || 0);
          setTemperature(data.temperature || 0);
        }
      });

      onValue(ref(db, 'location/current'), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setLatitude(data.latitude || 0);
          setLongitude(data.longitude || 0);
          setSatellites(data.satellites || 0);
        }
      });

      setLoading(false);
    } catch (err) {
      console.error("Error initializing dashboard:", err);
      setError("Failed to initialize dashboard");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className='dashboardcss'>
        <div className='loading'>Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='dashboardcss'>
        <div className='error'>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className='dashboardcss'>
      <SideMenu uptime={uptime} wifiStrength={wifiStrength} />
      <div className='dashboardinfo'>
        <div className='dashnotification'>
          <h4>NOTIFICATION</h4>
          <div className='dashnotificationcontainer'>
        

            {!motionActive && (
              <Notification deviceName="Motion Sensor" message="No motion detected!" />
            )}
            {lowBattery && (
              <Notification deviceName="Battery" message="Low battery warning!" />
            )}
            <Notification deviceName="Battery" message={isCharging ? "Charging..." : "Not charging"} />

            {sensorStatus.bme680 === 'Error' && (
              <Notification deviceName="BME680" message="Stopped working, check it out..." />
            )}
            {sensorStatus.gps === 'Error' && (
              <Notification deviceName="GPS" message="No GPS signal - fix needed!" />
            )}
            {sensorStatus.ir1 === 'Error' && (
              <Notification deviceName="IR Sensor 1" message="IR Sensor 1 not working!" />
            )}
            {sensorStatus.ir2 === 'Error' && (
              <Notification deviceName="IR Sensor 2" message="IR Sensor 2 not working!" />
            )}
            {sensorStatus.loadcell === 'Error' && (
              <Notification deviceName="Load Cell" message="Load Cell sensor failure!" />
            )}
          </div>
        </div>
            <br />
        <div className='environmentalstatus'>
          <h4>PRODUCTION STATUS</h4>
          <div className='environmentalstatuscontainer'>
            <Meter label="Humidity" value={humidity} min={0} max={120} />
            <Meter label="GAS RESISTANCE" value={gasResistance} min={0} max={120} />
            <Meter label="PRESSURE" value={pressure} min={0} max={2000} unit="Ω" />
            <Value imageSrc="/temp.png" label="TEMP" value={`${temperature.toFixed(1)}°`} />
          </div>
        </div>
            <br />
        <div className='productionstatus'>
          <h4>PRODUCTION STATUS</h4>
          <div className='productionstatuscontainer'>
            <ProdVal image='/bee.png' label="BEE ACTIVITY" unit="" value={beeCount} min={0} max={120} />
            <ProdVal image='/hive.png' label="HONEY PRODUCTION" unit="kg" value={currentWeight} min={0} max={120} />
            <ProdVal image='/battery.png' label="BATTERY LIFE" unit="V" value={batteryVoltage} min={0} max={5} />
            <Value imageSrc="/tick.png" label="WIFI STRENGTH" value={`${wifiStrength} dBm`} />
          </div>
        </div>
            <br />
        <div className='mapstatus'>
          <div className='bottomcontainer'>
            <div>
              <h4>PRODUCTION STATUS</h4>
              <div className='mapstatuscontainer'>
                <MapComponent latitude={latitude} longitude={longitude} satelliteCount={satellites} />
              </div>
            </div>
            <div>
              <h4>SYSTEM STATUS</h4>
              <div className='systemstatuscontainer'>
                <System name="BME680" status={sensorStatus.bme680} />
                <System name="GPS" status={sensorStatus.gps} />
                <System name="IR 1" status={sensorStatus.ir1} />
                <System name="IR 2" status={sensorStatus.ir2} />
                <System name="LOADCELL" status={sensorStatus.loadcell} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
