import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideNav from '../components/Header/AdminSideNav';
import MatrimonyContainer from '../components/shared/MatrimonyContainer';

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