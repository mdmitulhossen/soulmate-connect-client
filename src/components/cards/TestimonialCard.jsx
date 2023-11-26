import { Box, Button, Paper, Rating, Typography } from "@mui/material"
import userAvatar from '../../assets/user.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const TestimonialCard = () => {
    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: { sz: 'column', md: 'row' },
            }}
        >
            <Paper elevation={2}
                sx={{
                    width: { md: '235px', sz: '80%' },
                    zIndex: 10,
                    height: { md: '300px', sz: '150px' },
                    display: 'flex',
                    gap: {sz:'10px',md:'0px'},
                    alignItems:{md:'start',sz:'center'},
                    flexDirection: { md: 'column', sz: 'row' },
                    backgroundImage: 'linear-gradient(360deg,#66451c,rgba(102, 69, 28,0.5))',
                }}
            >
                <Box
                    component='img'
                    src={userAvatar}
                    sx={{
                        width: {md:'100%',sz:'150px'},
                        height:{md:'65%',sz:'100%'}
                    }}


                />

                <Box>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{
                            color: 'white',
                            fontSize: {md:'20px',sz:'15px'},
                            fontWeight: 600,
                            padding: '10px 10px 0px 10px',
                        }}
                    >
                        Md Mitul Hossain
                    </Typography>
                    <Typography
                        component='p'
                        variant="subtitle"
                        sx={{
                            color: 'white',
                            fontSize: '14px',
                            px: '10px',
                            fontWeight: 600,
                            opacity: 0.7,
                        }}
                    >
                        22/10/2023
                    </Typography>
                    <Box
                        sx={{
                            pt: '5px',
                            px: '10px',
                        }}
                    >
                        <Rating name="read-only" value='4' readOnly />
                    </Box>
                </Box>


            </Paper>
            <Paper elevation={3}
                sx={{
                    width: '300px',
                    height: '350px',
                    bgcolor: 'fff',
                    marginLeft: '-20px',
                    padding: '30px',
                }}
            >
                <Box>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{
                            color: '#66451c',
                            fontSize: '15px',
                            fontWeight: 500,
                            textAlign: 'center',
                            opacity: 0.8,
                        }}
                    >
                        Testimonial N1
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <FormatQuoteIcon fontSize='large' sx={{ fontSize: '40px', color: '#66451c', transform: 'rotate(180deg)', opacity: '0.5' }} />
                        <FormatQuoteIcon fontSize='large' sx={{ fontSize: '40px', color: '#66451c', opacity: '0.5' }} />
                    </Box>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{
                            color: '#66451c',
                            fontSize: '15px',
                            fontWeight: 600,
                            textAlign: 'justify',
                        }}
                    >
                        Your platform has been a game-changer for me. The user-friendly interface, coupled with robust features, made navigation a breeze. The 'Find Your Match' and 'Send Interest' phases seamlessly facilitated connections
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pt: '10px',

                        }}
                    >
                        <Button
                            sx={{
                                background: '#66451c',
                                color: '#fff',
                                fontWeight: 500,
                                fontSize: { md: '10px', sz: '10px' },
                                '&:hover': {
                                    background: '#e58f27',
                                    color: '#fff',
                                },
                            }}
                            // component={NavLink}
                            // to='#'
                            variant='contained'
                        >
                            <Typography variant="paragraph">Read More</Typography>
                        </Button>
                    </Box>
                </Box>
            </Paper>

        </Box>
    );
};

export default TestimonialCard;