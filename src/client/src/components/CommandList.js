import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import "./CommandList.css";

export const commands = [
  "!accountage",
  "!ban",
  "!commands",
  "!famous",
  "!followage",
  "!lurk",
  "!project",
  "!today",
  "!shoutout",
  "!so",
  "!playing",
  "!giveaway",
  "!merch",
  "!poll",
  "!weather",
  "!uptime",
  "!discord",
  "!specs",
  "!8ball",
  "!schedule",
  "!socials",
  "!project",
];

const CommandList = () => {
  return (
    <div className="command-list" data-testid="commandList-con">
      {commands.map((command, index) => (
        <Card
          data-testid="commandList-card"
          key={index}
          className="command-card"
        >
          <CardContent>
            <Typography
              data-testid="commandList-card-h5"
              variant="h5"
              component="div"
            >
              {command}
            </Typography>
            <Typography data-testid="commandList-card-body2" variant="body2">
              Use this command to interact with the Twitch bot.
            </Typography>
            <Box className="card-action-row">
              <Button variant="contained" startIcon={<InfoOutlined />}>
                Info
              </Button>
              <Button variant="contained" startIcon={<InfoOutlined />}>
                Execute
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommandList;
