import React from "react";
import { Paper, Typography } from "@mui/material";
import Login from "../components/Login";
import "./HomePage.css";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "550px",
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "400px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h4">TwitchBot</Typography>
        <Login />
        <div> {/* Placeholder for Twitch graphic */}</div>
      </Paper>
    </div>
  );
};

export default Home;
