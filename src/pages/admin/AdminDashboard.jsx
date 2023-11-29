import React from 'react';
import BiodataStats from './BiodataStats';
import RevenueStats from './RevenueStats';
import { Grid, Typography, Box } from '@mui/material';
import AdminBioDataStateCard from '../../components/cards/AdminBioDataStateCard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

import allImage from '../../assets/icons/all.png';
import maleImage from '../../assets/icons/male.png';
import femaleImage from '../../assets/icons/woman.png';
import moneyImage from '../../assets/icons/money.png';
import premiumImage from '../../assets/icons/premium.png';

const AdminDashboard = () => {

    return (
        <>
            <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, Welcome back 👋
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '15px',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Total Biodata"
                        total={20}
                        color="success"
                        icon={allImage}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Male"
                        total={11}
                        color="info"
                        icon={maleImage}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Female"
                        total={9}
                        color="warning"
                        icon={femaleImage}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '15px',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Premium"
                        total={12}
                        color="success"
                        icon={premiumImage}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Revenue"
                        total="1500$"
                        color="info"
                        icon={moneyImage}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '15px',
                    mb: 5,
                }}
            >
                <Box sx={{ flex: 1,border:'1px dashed #000',borderRadius:2 }}>
                    <Chart
                        type='pie'
                        width='100%'
                        series={[20, 11, 9, 12]}
                        height={380}
                        options={{
                            labels: ['Total', 'Male', 'Female', 'Premium'],
                        }}
                    
                    />
                    
                </Box>


            </Box>
        </>
    );
};

export default AdminDashboard;