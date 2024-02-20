import React, { useContext, useState } from "react";
import { Paper, Typography, Button, Alert} from "@mui/material";
import "./HomePage.css";
import { AuthContext } from "../context/authContext";
import axios from 'axios';

const Home = () => {
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const { login } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      await login(inputs);
      setErr(null); // Clear any existing error message
    } catch (err) {
		if (err.response) {
			setErr(err.response.data.error);
		} else if (err.request) {
			setErr('No response received from the server');
		} else {

			setErr('An error occurred while processing your request.');
		}
		console.error(err);  // Set error message
    } finally {
      setLoading(false); // Set loading to false when request is complete
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (err) {
      // setErr(err.response.data);
      console.log(err);
    }
  };
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
			  {err && <Alert severity="error">{err}</Alert>}
        {currentUser ? (
          <Button type="submit" variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <form className="auth" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" disabled={loading}>
			  {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        )}
        <div> {/* Placeholder for Twitch graphic */}</div>
      </Paper>
    </div>
  );
};

export default Home;
