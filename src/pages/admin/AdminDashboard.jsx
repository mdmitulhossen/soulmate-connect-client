
import { Typography, Box } from '@mui/material';
import AdminBioDataStateCard from '../../components/cards/AdminBioDataStateCard';
import Chart from 'react-apexcharts'

import allImage from '../../assets/icons/all.png';
import maleImage from '../../assets/icons/male.png';
import femaleImage from '../../assets/icons/woman.png';
import moneyImage from '../../assets/icons/money.png';
import premiumImage from '../../assets/icons/premium.png';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Spinner from '../../components/Spinner/Spinner';

const AdminDashboard = () => {
    const axiosPublic = useAxiosPublic()

    const { data: dashBoardData = {}, isLoading } = useQuery({
        queryKey: ['dashboardData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/dashboardData')
            return res.data
        }
    })

    //     totalBio

    // totalFemale

    // totalMale

    // totalPayment

    // totalPremiumBio


    console.log(dashBoardData)


    return (
        <>
            <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, Welcome back 👋
            </Typography>

            {
                isLoading ? <Spinner />
                    :
                    <>
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
                                    total={dashBoardData?.totalBio}
                                    color="success"
                                    icon={allImage}
                                />
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <AdminBioDataStateCard
                                    title="Male"
                                    total={dashBoardData?.totalMale}
                                    color="info"
                                    icon={maleImage}
                                />
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <AdminBioDataStateCard
                                    title="Female"
                                    total={dashBoardData?.totalFemale}
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
                                    total={dashBoardData?.totalPremiumBio}
                                    color="success"
                                    icon={premiumImage}
                                />
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <AdminBioDataStateCard
                                    title="Revenue"
                                    total={`${dashBoardData?.totalPayment}$`}
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
                            <Box sx={{ flex: 1, border: '1px dashed #000', borderRadius: 2 }}>
                                <Chart
                                    type='pie'
                                    width='100%'
                                    series={[dashBoardData?.totalBio, dashBoardData?.totalMale, dashBoardData?.totalFemale, dashBoardData?.totalPremiumBio]}
                                    height={380}
                                    options={{
                                        labels: ['Total', 'Male', 'Female', 'Premium'],
                                    }}

                                />

                            </Box>


                        </Box>
                    </>
            }
        </>
    );
};

export default AdminDashboard;