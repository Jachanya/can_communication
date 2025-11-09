import React, { useState } from 'react';
import CanDeviceList from '../CanDeviceList/CanDeviceList.jsx';
import SimpleBottomNavigation from '../Navigation/Navigation.jsx';
import { fetchDevices } from '../../api/devices.js';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './App.css';

function App() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchDevices = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDevices();
      setDevices(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="app-container" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SimpleBottomNavigation />

      <Box component="main" sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          List of CAN Devices
        </Typography>

        <Button
          variant="contained"
          onClick={handleFetchDevices}
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? 'Loading…' : 'Fetch Devices'}
        </Button>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            Error: {error}
          </Typography>
        )}

        {devices.length > 0 ? (
          <CanDeviceList devices={devices} />
        ) : (
          !loading && <Typography>No devices loaded yet.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
