import React from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CanDeviceList({ devices }) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ minWidth: 800 }} aria-label="CAN devices table">
        <TableHead sx={{ backgroundColor: 'primary.main' }}>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>Interface</TableCell>
            <TableCell sx={{ color: '#fff' }}>Channel</TableCell>
            <TableCell sx={{ color: '#fff' }}>Supports FD</TableCell>
            <TableCell align="right" sx={{ color: '#fff' }}>Controller #</TableCell>
            <TableCell align="right" sx={{ color: '#fff' }}>Device Features</TableCell>
            <TableCell align="right" sx={{ color: '#fff' }}>Device ID</TableCell>
            <TableCell sx={{ color: '#fff' }}>Device Name</TableCell>
            <TableCell align="right" sx={{ color: '#fff' }}>Device Type</TableCell>
            <TableCell align="right" sx={{ color: '#fff' }}>Channel Condition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devices.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No devices found.
              </TableCell>
            </TableRow>
          ) : (
            devices.map((device, idx) => (
              <TableRow
                key={device.device_id ?? idx}
                sx={{
                  '&:nth-of-type(even)': { backgroundColor: 'action.hover' },
                }}
              >
                <TableCell component="th" scope="row">
                  {device.interface}
                </TableCell>
                <TableCell>{device.channel}</TableCell>
                <TableCell>{device.supports_fd ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right">{device.controller_number}</TableCell>
                <TableCell align="right">{device.device_features}</TableCell>
                <TableCell align="right">{device.device_id}</TableCell>
                <TableCell>{device.device_name}</TableCell>
                <TableCell align="right">{device.device_type}</TableCell>
                <TableCell align="right">{device.channel_condition}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CanDeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      interface: PropTypes.string,
      channel: PropTypes.string,
      supports_fd: PropTypes.bool,
      controller_number: PropTypes.number,
      device_features: PropTypes.number,
      device_id: PropTypes.number,
      device_name: PropTypes.string,
      device_type: PropTypes.number,
      channel_condition: PropTypes.number,
    })
  ).isRequired,
};

export default CanDeviceList;
