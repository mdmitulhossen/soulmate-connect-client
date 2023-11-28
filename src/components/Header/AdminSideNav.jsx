import { NavLink, useLocation } from "react-router-dom";
import test from '../../assets/BiodataDetails/2.jpg'
import EditNoteIcon from '@mui/icons-material/EditNote';
import StreetviewIcon from '@mui/icons-material/Streetview';
import RadioIcon from '@mui/icons-material/Radio';

import DatasetIcon from '@mui/icons-material/Dataset';
import { Box, Chip, Paper, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const sideNavItems = [
    { name: 'Dashboard', path: '/dashboard/admin', icon: <DatasetIcon fontSize="medium" /> },
    { name: 'Manage user', path: '/dashboard/admin/manageUser', icon: <EditNoteIcon fontSize="medium" /> },
    { name: 'Manage Premium', path: '/dashboard/admin/approvedPremium', icon: <StreetviewIcon fontSize="medium" /> },
    { name: 'Manage Contact Request', path: '/dashboard/admin/approvedContactRequest', icon: <RadioIcon fontSize="medium" /> },
]

const AdminSideNav = () => {
    const location = useLocation()
    return (
        <Paper
            elevation={2}
            sx={{
                p: { sz: 1, lg: 2, xxl: 4 },
                borderRadius: 2,
            }}
        >
            <Box
                component='img'
                src={test}
                alt='test'
                sx={{
                    width: '100%',
                    height: '200px',
                    borderRadius: 2,
                }}
            />
            {/* items */}
            <Box
                sx={{
                    mt: 2,
                }}>
                <Chip sx={{ borderRadius: '5px' }} color="primary" size="small" label="Admin"></Chip>
            </Box>
            <Box>
                {
                    sideNavItems.map((item, index) => (
                        <Box
                            key={index}
                            component={NavLink}
                            to={item.path}
                            style={(location.pathname === item.path) ? { color: '#03A9F4', textDecoration: 'none', background: '#E4F1FC' } : { color: '#000', textDecoration: 'none' }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                                py: '2px',
                                px: 1,
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {
                                item.icon
                            }
                            {/* <DatasetIcon fontSize="medium" /> */}
                            <Typography
                                component='span'
                                variant='paragraph'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 600,

                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                    ))
                }

                <Box
                    component='p'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mt: 2,
                        py: '2px',
                        px: 1,
                        borderRadius: '5px',
                        cursor: 'pointer',
                        '&:hover': {
                            background: '#E4F1FC',
                            color: '#03A9F4',  
                        }
                    }}
                >
                
                    <LogoutIcon fontSize="medium" />
                    <Typography
                        component='span'
                        variant='paragraph'
                        sx={{
                            fontSize: '16px',
                            fontWeight: 600,

                        }}
                    >
                        LogOut
                    </Typography>
                </Box>
            </Box>
        </Paper >
    );
};

export default AdminSideNav;