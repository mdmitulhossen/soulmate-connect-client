import { Box, Button, Typography } from "@mui/material";
import breadCrumbBg from '../../assets/breadcrumbBg.jpg';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';

const HeaderBreadCrumb = ({name,id}) => {
    return (
        <Box
            component='div'
            sx={{
                width: '100%',
                height: '150px',
                backgroundImage: `url(${breadCrumbBg})`,
                position: 'relative',

            }}
        >
            <Box
                component='div'
                sx={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'rgba(0,0,0,0.5)',
                    backgroundImage: 'linear-gradient(90deg, rgba(71, 9, 9, 0.64) 5%, rgb(135, 15, 68) 80%)',
                    opacity: 0.8,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 1,
                }}
            />


            <Box
                component='div'
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='title'
                    component='p'
                    sx={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        zIndex: 3,
                        mb:2
                    }}
                >
                    Details Of {name}
                </Typography>
                <Button 
                endIcon={<SwipeLeftAltIcon/>}
                 sx={{
                    backgroundImage:'linear-gradient(45deg, rgb(205, 0, 152), rgb(225, 77, 97) 80%);',
                    fontWeight:'bold',
                    fontSize:'12px',
                 }}
                variant="contained">
                    ID {id}
                </Button>
            </Box>
        </Box>
    );
};

export default HeaderBreadCrumb;