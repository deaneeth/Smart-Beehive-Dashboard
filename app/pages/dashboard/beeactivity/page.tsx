"use client";
import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase-config/firebase";

import "./beeactivity.css";
import SideMenu from "../../components/sidemenu/sidemenu";
import ProdVal from "../../components/prodval/meter";
import Graph from '../../components/envigraph/envigraph';

const Environment = () => {
  const [beeCount, setBeeCount] = useState(0);
  const [productionWeight, setProductionWeight] = useState(0);
  const [beeActivityHistory, setBeeActivityHistory] = useState<{ timestamp: string; value: number }[]>([]);
  const [productionHistory, setProductionHistory] = useState<{ timestamp: string; value: number }[]>([]);

  const [uptime, setUptime] = useState(0);
  const [wifiStrength, setWifiStrength] = useState(0);

  // Real-time bee count
  useEffect(() => {
    const countRef = ref(database, 'beeActivity/current/count');
    const unsubscribe = onValue(countRef, (snapshot) => {
      const count = snapshot.val();
      if (count !== null) setBeeCount(count);
    });
    return () => unsubscribe();
  }, []);

  // Real-time production weight using net_weight (as absolute value)
  useEffect(() => {
    const weightRef = ref(database, 'alerts/current/weight/current');
    const unsubscribe = onValue(weightRef, (snapshot) => {
      const data = snapshot.val();
      if (data?.net_weight !== undefined) {
        setProductionWeight(Math.abs(data.net_weight));
      }
    });
    return () => unsubscribe();
  }, []);

  // Historical bee activity data
  useEffect(() => {
    const dailyRef = ref(database, 'beeActivity/daily');
    const unsubscribe = onValue(dailyRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.entries(data).map(([timestamp, entry]: any) => ({
          timestamp,
          value: entry.total_count || 0,
        }));
        setBeeActivityHistory(formatted);
      }
    });
    return () => unsubscribe();
  }, []);

  // Historical honey production data using net_weight (as absolute value)
  useEffect(() => {
    const prodHistoryRef = ref(database, 'alerts/history/weight');
    const unsubscribe = onValue(prodHistoryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.entries(data).map(([timestamp, entry]: any) => ({
          timestamp,
          value: Math.abs(entry.net_weight || 0),
        }));
        setProductionHistory(formatted);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch uptime and Wi-Fi strength
  useEffect(() => {
    const statusRef = ref(database, 'system/status');
    const unsubscribe = onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data?.wifi_strength !== undefined) setWifiStrength(data.wifi_strength);
        if (data?.uptime !== undefined) setUptime(data.uptime); // corrected to data.uptime
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='dashboardcss'>
      <SideMenu uptime={uptime} wifiStrength={wifiStrength} />
      <div className='dashboardinfo'>
        <h4>BEE ACTIVITY & Production</h4>
        <div className='actprod'>
          <ProdVal image='/bee.png' label="BEE ACTIVITY" unit="" value={beeCount} min={0} max={120} />
          <ProdVal image='/hive.png' label="HONEY PRODUCTION" unit="KG" value={productionWeight} min={0} max={120} />
        </div>

        <div className='environmentalgraphs'>
          <div className='envitoppart'>
            <div>
              <h4>BEE ACTIVITY</h4>
              <div className='envigraph'>
                <Graph data={beeActivityHistory} color="orange" />
              </div>
            </div>
            <div>
              <h4>HONEY PRODUCTION</h4>
              <div className='envigraph'>
                <Graph data={productionHistory} color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
