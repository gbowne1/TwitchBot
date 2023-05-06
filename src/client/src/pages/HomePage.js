import React, { useState, useEffect, useContext, useRef, useCallback, useMemo, useReducer } from "react";
import {
	AppBar, Box, Container, Avatar, Toolbar, Tooltip, Typography, Button, IconButton, Switch, FormControlLabel,
	FormGroup, Menu, MenuItem, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, InputBase, Paper,
	Fab, ListSubheader, Slide
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import { useHistory, useNavigate, useLocation, useRouteMatch, useParams } from "react-router-dom";
import Home from "../components/Home";

function HomePage() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          TwitchBot
			  </Typography>
			  <Switch  />
        <div>
          <IconButton
            color="inherit"
            aria-label="account"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
	  </AppBar>
  );
}

export default HomePage;
