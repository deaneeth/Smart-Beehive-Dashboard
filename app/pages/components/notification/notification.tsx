import React from 'react';
import './notification.css';

interface NotificationProps {
  deviceName: string;
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ deviceName, message }) => {
  return (
    <div className='alertcontainer'>
      <img src="/alert-svgrepo-com.svg" alt="alert" />
      <p><strong>{deviceName}</strong> {message}</p>
    </div>
  );
};

export default Notification;
