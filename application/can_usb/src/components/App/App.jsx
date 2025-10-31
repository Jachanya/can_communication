import React, { useState, useEffect } from 'react';
import CanDeviceList from '../CanDeviceList/CanDeviceList.jsx';
import SimpleBottomNavigation from '../Navigation/Navigation.jsx';
import { fetchDevices } from '../../api/devices.js';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchDevices();
        setDevices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div>Loading devices…</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app-container">
        
      <SimpleBottomNavigation />
      <h2>List of CAN Devices</h2>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Refresh
      </Button>
      <CanDeviceList devices={devices} />
    </div>
  );
}

export default App;
