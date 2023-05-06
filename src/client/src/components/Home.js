import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import {
  AppBar,
  Box,
  Container,
  Avatar,
  Toolbar,
  Tooltip,
  Typography,
  Button,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputBase,
  Paper,
  Fab,
  ListSubheader,
  Slide,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  SearchIcon,
  MailIcon,
  NotificationsIcon,
  MoreIcon,
  AddIcon,
} from "@mui/icons-material";
import {
  useHistory,
  useNavigate,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Home
        </Typography>
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

export default Home;
