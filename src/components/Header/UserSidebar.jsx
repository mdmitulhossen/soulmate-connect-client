import { Box, Paper, Typography } from "@mui/material";
import test from '../../assets/BiodataDetails/1.jpeg'
import DatasetIcon from '@mui/icons-material/Dataset';
import { NavLink, useLocation } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import StreetviewIcon from '@mui/icons-material/Streetview';
import RadioIcon from '@mui/icons-material/Radio';
import RecommendIcon from '@mui/icons-material/Recommend';
import LogoutIcon from '@mui/icons-material/Logout';

const sideNavItems = [
    { name: 'Dashboard', path: '/dashboard/user', icon: <DatasetIcon fontSize="medium" /> },
    { name: 'EditBio', path: '/dashboard/user/editbio', icon: <EditNoteIcon fontSize="medium" /> },
    { name: 'View Biodata', path: '/dashboard/user/viewBioData', icon: <StreetviewIcon fontSize="medium" /> },
    { name: 'My Contact Request', path: '/dashboard/user/contactRequest', icon: <RadioIcon fontSize="medium" /> },
    { name: 'Favourites Biodata .', path: '/dashboard/user/favourite', icon: <RecommendIcon fontSize="medium" /> },
]

const UserSidebar = () => {
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

export default UserSidebar;