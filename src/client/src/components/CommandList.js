import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';


const CommandList = () => {
  const commands = [
    '!accountage',
    '!ban',
    '!commands',
    '!famous',
    '!followage',
    '!lurk',
	'!project',
	'!today',
    '!shoutout',
	'!so',
	'!playing',
	'!giveaway',
	`!merch`
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px', marginTop: '10px' }}>
      {commands.map((command, index) => (
        <Card key={index} style={{ marginBottom: '5px', width: 'calc(20% - 5px)' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {command}
            </Typography>
            <Typography variant="body2">
              Use this command to interact with the Twitch bot.
            </Typography>
            <Button variant="contained" startIcon={<InfoOutlined />}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommandList;