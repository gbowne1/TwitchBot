import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

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
  `!merch`,
  `!poll`,
  `!weather`,
  `!uptime`,
  `!discord`,
  `!specs`,
  `!8ball`,
  `!schedule`,
  `!socials`,
  `!project`,
];

const CommandList = () => {
  return (
    <div
      data-testid="commandList-con"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: "5px",
        marginTop: "10px",
      }}
    >
      {commands.map((command, index) => (
        <Card
          data-testid="commandList-card"
          key={index}
          style={{ marginBottom: "5px", width: "calc(20% - 5px)" }}
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
