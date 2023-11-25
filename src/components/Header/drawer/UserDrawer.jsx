import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import userImage from '../../../assets/user.png'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
const UserDrawer = ({ handleDrawerToggle }) => {
    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#FEFBF3', minHeight: '100vh', pt: 2 }}>
            <Box
                component='div'
                sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', px: 2 }}
            >
                <IconButton
                sx={{border:1}} 
                >
                    <CloseIcon fontSize='medium' />
                </IconButton>
            </Box>
            <Box
                component='div'
                sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <Box
                    component='img'
                    sx={{ width: "160px", height: "170px", backgroundColor: '#ECAAAB', borderRadius: '8px' }}
                    src={userImage}
                >

                </Box>
                <Typography
                    variant='paragraph'
                    sx={{ color: '#66451c', fontWeight: 600, fontSize: '20px', textAlign: 'center', width: '200px', textDecoration: 'none', mt: 2 }}
                >
                    Md Mitul Hossain
                </Typography>
                <Typography
                    variant='paragraph'
                    sx={{ color: '#66451c', fontWeight: 400, fontSize: '18px', textAlign: 'center', width: '200px', textDecoration: 'none', }}
                >
                    User
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        mt: 2,
                        background: '#66451c',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '14px',
                        width: '160px',
                        '&:hover': {
                            background: '#e58f27',
                            color: '#fff',
                        },
                    }}
                >
                    Logout
                </Button>
            </Box>
            <Divider />

        </Box>
    );
};

UserDrawer.propTypes = {
    handleDrawerToggle: PropTypes.func,
};

export default UserDrawer;