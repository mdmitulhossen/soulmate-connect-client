
import { Typography, Box } from '@mui/material';
import AdminBioDataStateCard from '../../components/cards/AdminBioDataStateCard';
import Chart from 'react-apexcharts'

import likeImage from '../../assets/icons/like.png';
import tapImage from '../../assets/icons/tap.png';
import veiwersImage from '../../assets/icons/viewers.png';


const UserHomeDashboard = () => {
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
                        title="Viewers"
                        total={110}
                        color="success"
                        icon={veiwersImage}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Click"
                        total={48}
                        color="info"
                        icon={tapImage}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <AdminBioDataStateCard
                        title="Like"
                        total={19}
                        color="warning"
                        icon={likeImage}
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
                <Box sx={{ flex: 1, border: '1px dashed #000', borderRadius: 2 }}>
                    <Chart
                        type="area"
                        width='100%'
                        series={[
                            {
                                name: 'viewers',
                                data: [31, 40, 28, 51, 42, 109, 100]
                            },
                            {
                                name: 'clicks',
                                data: [11, 32, 45, 32, 34, 52, 41]
                            },
                            {
                                name: 'likes',
                                data: [11, 34, 48, 12, 85, 78, 100]
                            }
                        ]}
                        height={380}
                        options={{
                            labels: ['JAN', 'FAB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV', 'DEC']
                        }}

                    />

                </Box>


            </Box>
        </>
    );
};

export default UserHomeDashboard;