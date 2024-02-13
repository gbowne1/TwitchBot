import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../ThemeProvider";
import { useTheme } from "@mui/material/styles";

const AppBarComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerChange = () => {
        setOpen(!open);
    };
  
    const theme = useTheme();
    const { colorMode } = React.useContext(ColorModeContext);

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={handleDrawerChange}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        TwitchBot
                    </Typography>
                     <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="dark mode toggle"
                        onClick={colorMode.toggleColorMode}
                      >
                        {theme.palette.mode === "dark" ? (
                          <Brightness4Icon />
                        ) : (
                          <Brightness7Icon />
                        )}
                     </IconButton>
                </Toolbar>
            </AppBar>
            <DrawerMenu isOpen={open} onClose={handleDrawerChange} />
        </>
    );
};

export default AppBarComponent;
