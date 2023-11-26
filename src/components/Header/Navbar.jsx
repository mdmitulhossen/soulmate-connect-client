import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../logo/Logo';
import MobileDrawer from './drawer/MobileDrawer';
import { NavLink, useLocation } from "react-router-dom";

// image import

import userAvater from '../../assets/user.png'
import UserDrawer from './drawer/userDrawer';
import MatrimonyContainer from '../shared/MatrimonyContainer';

const drawerWidth = 240;
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Biodatas', path: '/biodatas' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact Us', path: '/contactUs' }
]


function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [userOpen, setUserOpen] = React.useState(false);
    const location = useLocation();

    const user = true;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleUserToggle = () => {
        setUserOpen((prevState) => !prevState);
    };



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <MatrimonyContainer>
                {/* <CssBaseline /> */}
                <AppBar elevation={0} component="nav" sx={{ bgcolor: '#FEFBF3', color: '#66451c', py: 1,width:'100%' }} position='sticky'>
                    <Toolbar disableGutters sx={{ padding: '0px',width:'100%' }}>

                        <Box
                            component='div'
                            sx={{ flexGrow: 1 }}
                        >
                            <Logo />
                        </Box>

                        {/* middle */}
                        <Box sx={{ flexGrow: 1, display: { sz: 'none', lg: 'flex' }, justifyContent: 'center', gap: '10px' }}>

                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    sx={{
                                        color: '#66451c',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        marginRight: { xs: '5px', md: '0px', xxl: '10px' },
                                    }}
                                    component={NavLink}
                                    to={item.path}
                                    style={(location.pathname === item.path) ? { color: '#e58f27' } : {}}
                                >
                                    <Typography variant="paragraph">{item.name.toUpperCase()}</Typography>
                                </Button>
                            ))}

                        </Box>

                        {/* right side */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                            component='div'
                        >
                            {/* login button */}
                            {
                                !user ?
                                    <Button
                                        sx={{
                                            background: '#66451c',
                                            color: '#fff',
                                            fontWeight: 600,
                                            fontSize: { md: '15px', sz: '12px' },
                                            '&:hover': {
                                                background: '#e58f27',
                                                color: '#fff',
                                            },
                                        }}
                                        component={NavLink}
                                        to='/login'
                                        variant='contained'
                                    >
                                        <Typography variant="paragraph">Login</Typography>
                                    </Button>
                                    :
                                    <Box
                                        onClick={handleUserToggle}
                                        component='div'
                                        sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', }}
                                    >
                                        <Avatar
                                            sx={{ border: '2px solid #66451c' }}
                                            alt="user" src={userAvater} />
                                        <Box
                                            sx={{ display: { sz: 'none', lg: 'block' } }}
                                        >
                                            <Typography
                                                component='p'
                                                sx={{ color: '#66451c', opacity: 50, fontWeight: 400, fontSize: { md: '15px', sz: '12px' } }}
                                                variant="paragraph"
                                            >
                                                User
                                            </Typography>
                                            <Typography
                                                component='p'
                                                sx={{ color: '#66451c', opacity: 50, fontWeight: 600, fontSize: { md: '15px', sz: '12px' } }}
                                                variant="paragraph"
                                            >
                                                MD Mitul Hosain
                                            </Typography>
                                        </Box>
                                    </Box>
                            }

                        </Box>

                        {/* menu button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 2, display: { lg: 'none' }, px: 0 }}
                        >
                            {
                                mobileOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />
                            }
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {/* drawer  */}
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { sz: 'block', lg: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <MobileDrawer handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
                    </Drawer>
                </nav>
                {/* user drawer */}
                <nav>
                    <Drawer
                        anchor='right'
                        container={container}
                        variant="temporary"
                        open={userOpen}
                        onClose={handleUserToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: 'block',
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' },
                        }}
                    >
                        <UserDrawer handleDrawerToggle={handleUserToggle} />
                    </Drawer>
                </nav>
            </MatrimonyContainer >
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;

