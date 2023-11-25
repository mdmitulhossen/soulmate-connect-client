import { Box, Button, Paper, Typography } from "@mui/material";
import userProfile from '../../assets/user.png'
import { NavLink } from "react-router-dom";

const ProfileCard = ({name}) => {
    return (
        <Box
            sx={{
                width: {sz:'300px',sm:'100%'},
                // width:'100%',
                height: '100%',
              
            }}
        >
            <Paper
                sx={{
                    width: '100%',
                    height: '100%',
                    elevation: 2,
                    borderRadius: '10px',
                    // backgroundImage: 'linear-gradient(360deg,#211f28e3,#bdbdbd)',
                    backgroundImage: 'linear-gradient(360deg,#66451c,rgba(102, 69, 28,0.5))',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant='paragraph'
                    sx={{
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 600,
                        padding: '15px',
                      
                    }}
                >
                    ND1
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexGrow: 1,
                    }}
                >
                    <Box
                        component='img'
                        src={userProfile}
                        sx={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            border: 1,
                            mt: '10px'
                        }}
                    >

                    </Box>
                </Box>

                <Typography
                    variant="paragraph"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 400,
                        padding: '15px',
                    }}
                >
                    <Box>
                        <p>{name || 'mitul'}</p>
                        <p>Male</p>
                        <p>23 YRS</p>
                    </Box>
                    <Box>
                        <p>Dhaka</p>
                        <p>Student</p>
                    </Box>
                </Typography>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                
                }}
                >
                    <Button
                        sx={{
                            background: '#66451c',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { md: '15px', sz: '12px' },
                            '&:hover': {
                                background: '#e58f27',
                                color: '#fff',
                            },
                        }}
                        component={NavLink}
                        to='#'
                        variant='contained'
                    >
                        <Typography variant="paragraph">View Profile</Typography>
                    </Button>
                </Box>
            </Paper>

        </Box>
    );
};

export default ProfileCard;