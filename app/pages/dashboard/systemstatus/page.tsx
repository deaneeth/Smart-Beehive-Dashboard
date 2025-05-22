"use client";
import React, { useEffect, useState } from 'react';
import "./systemstatus.css";
import SideMenu from "../../components/sidemenu/sidemenu";
import System from '../../components/system/system';
import { database } from "../../../firebase-config/firebase";
import { ref, onValue } from "firebase/database";

const Page = () => {
  const [sensorStatus, setSensorStatus] = useState({
    bme680: "Loading...",
    gps: "Loading...",
    ir1: "Loading...",
    ir2: "Loading...",
    loadcell: "Loading...",
    battery: "Loading...",
    uptime: "Loading...",
    wifi: "Loading..."
  });

  const [uptimeRaw, setUptimeRaw] = useState(0);          // for SideMenu
  const [wifiStrength, setWifiStrength] = useState(0);    // for SideMenu

  useEffect(() => {
    const statusRef = ref(database, 'system/status');
    const powerRef = ref(database, 'system/power/current');

    // Listen to sensor and WiFi status
    const unsubscribeStatus = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const sensors = data.sensors || {};
      const uptime = sensors.uptime || 0;
      const wifi = data.wifi_strength ?? "N/A";

      setUptimeRaw(uptime);
      setWifiStrength(wifi);

      setSensorStatus(prev => ({
        ...prev,
        bme680: sensors.bme680 === "ok" ? "Running.." : "Error!",
        gps: sensors.gps === "ok" ? "Running.." : "Error!",
        ir1: sensors.ir_sensors_1 === "ok" ? "Running.." : "Error!",
        ir2: sensors.ir_sensors_2 === "ok" ? "Running.." : "Error!",
        loadcell: sensors.loadcell === "ok" ? "Running.." : "Error!",
        uptime: `${Math.floor(uptime / 60)} min`,
        wifi: `${wifi} dBm`
      }));
    });

    // Listen to battery charging status
    const unsubscribeBattery = onValue(powerRef, (snapshot) => {
      const power = snapshot.val();
      setSensorStatus(prev => ({
        ...prev,
        battery: power?.charging ? "Charging.." : "Error!"
      }));
    });

    return () => {
      unsubscribeStatus();
      unsubscribeBattery();
    };
  }, []);

  return (
    <div className='dashboardcss'>
      <SideMenu uptime={uptimeRaw} wifiStrength={wifiStrength} />
      <div className='dashboardinfo'>
        <h4>SYSTEM DETAILS</h4>
        <div className='sysallcontainer'>
          <div className='sysinside'>
            <System name="BME680" status={sensorStatus.bme680} />
            <System name="GPS" status={sensorStatus.gps} />
          </div>
          <div className='sysinside'>
            <System name="IR 1" status={sensorStatus.ir1} />
            <System name="IR 2" status={sensorStatus.ir2} />
          </div>
          <div className='sysinside'>
            <System name="LOADCELL" status={sensorStatus.loadcell} />
            <System name="BATTERY" status={sensorStatus.battery} />
          </div>
          <div className='sysinside'>
            <System name="UPTIME" status={sensorStatus.uptime} />
            <System name="WIFI" status={sensorStatus.wifi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
