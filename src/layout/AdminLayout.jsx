import React from 'react';
import MatrimonyContainer from '../components/shared/MatrimonyContainer';
import { Box } from '@mui/material';
import UserSidebar from '../pages/userDashboard/UserSidebar';
import { Outlet } from 'react-router-dom';
import AdminSideNav from '../components/Header/AdminSideNav';

const AdminLayout = () => {
    return (
        <MatrimonyContainer>
            <Box
                sx={{
                    display: 'flex',
                    gap: 5,
                    my: 6,
                    justifyContent: 'center',
                    flexWrap: { sz: 'wrap', md: 'nowrap' },
                }}
            >
                {/* left */}
                <Box
                    sx={{
                        width: { lg: '30%', md: "50%", sz: '80%' }
                    }}
                >
                    <AdminSideNav />
                </Box>
                {/* Right */}
                <Box
                    sx={{
                        width: { lg: '70%', md: "50%", sz: '80%' }
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </MatrimonyContainer>
    );
};

export default AdminLayout;