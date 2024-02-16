import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '841px' }}>
      <Paper elevation={3} style={{ width: '400px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <Typography variant="h4">TwitchBot</Typography>
        <Button variant="contained">Login</Button>
        <div> {/* Placeholder for Twitch graphic */}</div>
      </Paper>
    </div>
  );
};

export default Home;