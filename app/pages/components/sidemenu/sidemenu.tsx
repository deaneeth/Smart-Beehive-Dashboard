'use client';
import React from 'react';
import './sidemenu.css';
import { useRouter } from 'next/navigation';

interface SideMenuProps {
  uptime: number | string;
  wifiStrength: number | string;
}

const SideMenu: React.FC<SideMenuProps> = ({ uptime, wifiStrength }) => {
  const router = useRouter();

  return (
    <div className='sidemenubuts'>
      <div className='sidemenudate'>
        <center><h4>Today Date:</h4></center><br />
        <center><h4 className='date'>DATE: {new Date().toISOString().split('T')[0].replace(/-/g, '/')}</h4></center>
      </div>

      <button onClick={() => router.push('/pages/dashboard')}>DASHBOARD</button>
      <button onClick={() => router.push('/pages/dashboard/environment')}>ENVIRONMENT</button>
      <button onClick={() => router.push('/pages/dashboard/beeactivity')}>BEE ACTIVITY</button>
      <button onClick={() => router.push('/pages/dashboard/systemstatus')}>SYSTEM STATUS</button>
      <button onClick={() => router.push('/logout')}>LOGOUT</button>

      <div className='sysdetails'>
        <div className='sysdetailsin'>
          <h4>UPTIME</h4>
          <h5>{uptime !== '' ? `${uptime} mins` : 'Loading...'}</h5>
        </div><br />
        <div className='sysdetailsin'>
          <h4>WIFI STRENGTH</h4>
          <h5>{wifiStrength !== '' ? `${wifiStrength} dms` : 'Loading...'}</h5>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
