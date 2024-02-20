import React, { useState, useEffect, useContext, useRef, useCallback, useMemo, useReducer } from "react";
import { AppBar, Box, Container, Avatar, Toolbar, Tooltip, Typography, Button, IconButton, Switch, FormControlLabel,
FormGroup, MenuItem, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, InputBase, Paper,
Fab, ListSubheader, Slide } from "@mui/material";
import { Menu, AccountCircle, SearchIcon, MailIcon, NotificationsIcon, MoreIcon, AddIcon } from "@mui/icons-material";
import { useHistory, useNavigate, useLocation, useRouteMatch, useParams } from "react-router-dom";
import "./About.css";

function About() {
	return (
		<h1>This is a Twitch chat bot</h1>
  );
  }

export default About;