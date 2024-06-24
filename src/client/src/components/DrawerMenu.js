import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useTheme } from "@mui/material/styles";

const DrawerMenu = (props) => {
  const navRoutes = routes.filter((route) => route.inNav);
  const theme = useTheme();

  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "8px",
        }}
      >
        <IconButton onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navRoutes.map((route, index) => (
          <ListItem key={index} sx={{ color: theme.palette.text.primary }}>
            <Link
              to={route.path}
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={props.onClose}
            >
              <ListItemText primary={route.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

DrawerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DrawerMenu;
