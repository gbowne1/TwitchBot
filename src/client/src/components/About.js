import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import "./About.css";

function About() {
  return (
    <Container sx={{ flexGrow:  1, p:  4 }}>
      <Paper>
        <Typography>
          About Twitch Bot
        </Typography>
        <Typography>
          This is a Twitch chat bot created using tmi.js and the Twitch API.
        </Typography>
        {/* Add more content here */}
      </Paper>
    </Container>
  );
}

export default About;