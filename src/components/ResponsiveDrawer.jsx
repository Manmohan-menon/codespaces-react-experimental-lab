import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.action.color,
    },
}));

const ResponsiveDrawer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const drawerContent = (
        <List>
            {['Home', 'About Us', 'Contact Us', 'Lessons', 'Merchandise'].map((text, index) => (
                <StyledListItem 
                    button key={index} 
                    component={Link} 
                    to={text === 'Home' ? '/' : `/${text.replace(' ', '').toLowerCase()}`}
                >
                    <ListItemText primary={text} />
                </StyledListItem>
            ))}
        </List>
    );

    return (
        <>
            {/* {isMobile ? (
                <>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
                <> */}
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                    {drawerContent}
                </Drawer>
                {/* </>
            )} */}
        </>
    );
};

export default ResponsiveDrawer;
