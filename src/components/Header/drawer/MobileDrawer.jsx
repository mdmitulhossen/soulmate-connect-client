import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Logo from '../../logo/Logo';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileDrawer = ({handleDrawerToggle,navItems}) => {
    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#FEFBF3', minHeight: '100vh' }}>
            <Box
                component='div'
                sx={{ py: 2, display: 'flex', justifyContent: 'center' }}
            >
                <Logo />
            </Box>
            <Divider />
            <List sx={{ pt: 4 }}>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', width: '100%' }}>
                            <Typography
                                component={NavLink}
                                sx={{ color: '#66451c', fontWeight: 600, fontSize: '15px', textAlign: 'center', width: '100%', textDecoration: 'none' }}
                                to={item.path}
                                style={(location.pathname === item.path) ? { color: '#e58f27' } : {}}
                            >
                                {item.name.toUpperCase()}

                            </Typography>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

MobileDrawer.propTypes = {
    handleDrawerToggle: PropTypes.func,
    navItems: PropTypes.array,
};

export default MobileDrawer;