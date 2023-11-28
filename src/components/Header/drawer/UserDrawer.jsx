import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import userImage from '../../../assets/user.png'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import ButtonLoader from '../../Spinner/ButtonLoader';
const UserDrawer = ({ handleDrawerToggle }) => {
    const { user,logOut,loading,} = useAuth() || {};

    const handleLogOut = () => {
        logOut().then((res) => {
            toast.success('Logout Successfully')
        })
    }
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
                    src={user?.photoURL || userImage}
                >

                </Box>
                <Typography
                    variant='paragraph'
                    sx={{ color: '#66451c', fontWeight: 600, fontSize: '20px', textAlign: 'center', width: '200px', textDecoration: 'none', mt: 2 }}
                >
                    {user?.displayName}
                </Typography>
                <Typography
                    variant='paragraph'
                    sx={{ color: '#66451c', fontWeight: 400, fontSize: '18px', textAlign: 'center', width: '200px', textDecoration: 'none', }}
                >
                    User
                </Typography>
                <Button
                onClick={handleLogOut}
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
                    {loading ? <ButtonLoader size={12} color='#fff'></ButtonLoader> : 'Logout'}
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