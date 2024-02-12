import React from 'react';
import { Box, Typography } from '@mui/material';

const Help = () => {
  return (
    <Box>
      <Typography variant="h4">Twitch Bot Help</Typography>
      <Typography variant="body1">
        Welcome to the Twitch Bot help page. Here you can find information on how to use the bot and its commands.
      </Typography>
      <Typography variant="h5">Available Commands</Typography>
      <Typography variant="body2">
        - !command1: Description of command 1
        - !command2: Description of command 2
        - !command3: Description of command 3
        {/* Add more commands and descriptions as needed */}
      </Typography>
      <Typography variant="h5">Bot Settings</Typography>
      <Typography variant="body2">
        You can configure the bot settings by visiting the settings page.
      </Typography>
    </Box>
  );
};

export default Help;