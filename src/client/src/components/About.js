import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import "./About.css";

function About() {
  return (
    <Container data-testid="about-container" sx={{ flexGrow: 1, p: 4 }}>
      <Paper data-testid="about-paper">
        <Typography data-testid="about-typo-title">About Twitch Bot</Typography>
        <Typography data-testid="about-typo-text">
          This is a Twitch chat bot created using tmi.js and the Twitch API.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
