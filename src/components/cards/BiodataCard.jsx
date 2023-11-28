import { Box, Chip, Divider, Paper, Typography } from '@mui/material';
import userImage from '../../assets/userSaruk.jpeg';
import { useNavigate } from 'react-router-dom';

const BiodataCard = () => {
    const navigate = useNavigate()
    return (
        <>
            <Paper
                sx={{
                    padding: '10px',
                    bgcolor: '#fff',
                    display: 'flex',
                    gap: '25px',
                    alignItems: 'center',
                    flexWrap: {sz:'wrap',md:'nowrap'},
                    position: 'relative',
                }}
            >
                <Typography
                    variant='title'
                    component='p'
                    sx={{
                        fontWeight: 'bold',
                        color: '#66451c',
                        fontSize: '14px',
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        bgcolor: '#fff',
                        padding: '5px',
                        px: 1
                    }}
                >
                    BID 134
                </Typography>
                <Box
                    component='img'
                    src={userImage}
                    alt='user'
                    sx={{
                        width: {xl:'320px',lg:'220px',md:'250px',sz:'100%'},
                        height: '200px',
                        borderRadius: '5px',
                        flexShrink: 0
                    }}
                />
                <Box
                    sx={{
                        width: '100%',

                    }}
                >
                    <Typography
                        variant='title'
                        component='p'
                        sx={{
                            fontWeight: 'bold',
                            color: '#212529',
                            fontSize: '22px',
                            pb: 2
                        }}
                    >
                        Muhammad Fauzan
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                            pb: 2
                        }}
                    >
                        <Chip label="male" sx={{ bgcolor: '#718FA0', borderRadius: '5px', fontWeight: 600, color: '#fff', fontSize: '12px' }} />
                        <Chip label="22 Yrs Old" sx={{ bgcolor: '#718FA0', borderRadius: '5px', fontWeight: 600, color: '#fff', fontSize: '12px' }} />
                        <Chip label="Dhaka" sx={{ bgcolor: '#718FA0', borderRadius: '5px', fontWeight: 600, color: '#fff', fontSize: '12px' }} />
                        <Chip label="Student" sx={{ bgcolor: '#718FA0', borderRadius: '5px', fontWeight: 600, color: '#fff', fontSize: '12px' }} />
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                            py: 2
                        }}
                    >
                        <Chip label="Send Interest" variant="outlined" onClick={() => console.log('click')} sx={{ fontWeight: 600, color: '#718FA0', fontSize: '12px' }}/>
                        <Chip label="View Profile" variant="outlined" onClick={() => navigate('/biodata/1')} sx={{ fontWeight: 600, color: '#718FA0', fontSize: '12px' }}/>
                    </Box>
                </Box>


            </Paper>
        </>
    );
};

export default BiodataCard;