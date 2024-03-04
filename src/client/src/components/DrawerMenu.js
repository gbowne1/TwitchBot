import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const DrawerMenu = (props) => {
  const navRoutes = routes.filter((route) => route.inNav);
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <List>
        {navRoutes.map((route, index) => (
          <ListItem key={index} sx={{ color: "palette.text.primary" }}>
            <Link
              to={route.path}
              style={{ color: "inherit", textDecoration: "none" }}
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
