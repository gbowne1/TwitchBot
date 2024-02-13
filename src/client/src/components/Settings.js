import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Switch, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios';

const Settings = () => {
  const [settings, setSettings] = useState({
    botUsername: '',
    oauthToken: '',
    channelName: '',
    commandPrefix: '!',
    defaultMessages: {
      newFollower: 'Thanks for following!',
      newSubscriber: 'Welcome to the sub team!',
      customCommand1: 'Custom response 1',
      // Add more default messages as needed
    },
    enableLeaderboard: true,
    enableChatTracking: true,
    theme: 'light', // or 'dark'
    webhookURL: '',
  });

  useEffect(() => {
    // Fetch settings from your backend
    // Example: axios.get('/api/settings').then((response) => setSettings(response.data));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSettings((prevSettings) => ({ ...prevSettings, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update settings in your backend
    // Example: axios.post('/api/settings', settings);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Bot Username"
        name="botUsername"
        value={settings.botUsername}
        onChange={handleChange}
      />
      <TextField
        label="OAuth Token"
        name="oauthToken"
        type="password"
        value={settings.oauthToken}
        onChange={handleChange}
      />
      <TextField
        label="Channel Name"
        name="channelName"
        value={settings.channelName}
        onChange={handleChange}
      />
      <TextField
        label="Command Prefix"
        name="commandPrefix"
        value={settings.commandPrefix}
        onChange={handleChange}
      />

      <FormControlLabel
        control={<Switch checked={settings.enableLeaderboard} onChange={handleCheckboxChange} name="enableLeaderboard" />}
        label="Enable Leaderboard"
      />
      <FormControlLabel
        control={<Switch checked={settings.enableChatTracking} onChange={handleCheckboxChange} name="enableChatTracking" />}
        label="Enable Chat Tracking"
      />

      <InputLabel id="theme-label">Theme</InputLabel>
      <Select
        labelId="theme-label"
        id="theme-select"
        value={settings.theme}
        label="Theme"
        onChange={handleChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
      <Button type="submit">Save Settings</Button>
    </form>
  );
};

export default Settings;