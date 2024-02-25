import React from "react";
import { Box, Typography } from "@mui/material";

export const helpContent = {
  h4Text: "Twitch Bot Help",
  body1Text:
    "Welcome to the Twitch Bot help page. Here you can find information on how to use the bot and its commands.",
  firstH5Text: "Available Commands",
  firstBody2Text:
    "- !command1: Description of command 1 - !command2: Description of command 2 - !command3: Description of command 3",
  secondH5Text: "Bot Settings",
  secondBody2Text:
    "You can configure the bot settings by visiting the settings page.",
};

const Help = () => {
  return (
    <Box data-testid="help-box">
      <Typography variant="h4">{helpContent.h4Text}</Typography>
      <Typography variant="body1">{helpContent.body1Text}</Typography>
      <Typography variant="h5">{helpContent.firstH5Text}</Typography>
      <Typography variant="body2">
        {helpContent.firstBody2Text}
        {/* Add more commands and descriptions as needed */}
      </Typography>
      <Typography variant="h5">{helpContent.secondH5Text}</Typography>
      <Typography variant="body2">{helpContent.secondBody2Text}</Typography>
    </Box>
  );
};

export default Help;
