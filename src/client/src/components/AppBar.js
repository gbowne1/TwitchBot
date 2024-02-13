import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';

const AppBarComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerChange = () => {
        setOpen(!open);
    };

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
                </Toolbar>
            </AppBar>
            <DrawerMenu isOpen={open} onClose={handleDrawerChange} />
        </>
    );
};

export default AppBarComponent;
