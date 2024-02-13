import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const DrawerMenu = (props) => {
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <List>
        {routes.map((route, index) => (
          <ListItem key={index}>
            <Link to={route.path}>
              <ListItemText primary={route.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
