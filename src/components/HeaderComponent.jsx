import React, {useState} from "react";
import '../styles/Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid2 from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveDrawer from "./ResponsiveDrawer";

const HeaderComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


return(
        <AppBar position="static" sx={{ backgroundColor: '#80000', borderBottom: '2px solid #800000', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar>
                    <Grid2
                        container
                        alignItems="center"
                        justifyContent={"space-between"}
                        spacing={2}
                        sx={{ width: '100%' }}
                    >
                        <Grid2 item xs={2}>
                            <ResponsiveDrawer />
                        </Grid2>
                        
                        {/* {!isMobile && ( */}
                            <Grid2 item xs={12}>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    style={{
                                        flexGrow: 1,
                                        color: '#f9f9f9',
                                    }}
                                >
                                    Nritya Odori
                                </Typography>
                            </Grid2>
                        {/* )} */}
                        <Grid2 item xs="auto">
                            <Box
                                component="img"
                                src="./logo.png"
                                sx={{
                                    width: isMobile ? "3.5rem" : "5.5rem",
                                    height: isMobile ? "3rem" : "5rem",
                                    borderRadius: "30%",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                                    // animation: 'pendulum 2s infinite ease-in-out'
                                }}
                            />
                        </Grid2>
                    </Grid2>
                </Toolbar>
        </AppBar>
    )
};

export default HeaderComponent;