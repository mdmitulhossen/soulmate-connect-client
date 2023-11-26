import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Divider } from '@mui/material';
import MatrimonyContainer from '../shared/MatrimonyContainer';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom';
import footerImage from '../../assets/footer.jpg'

const Footer = () => {
    return (
        <Box
            component='div'
            style={{ backgroundImage: `url(${footerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',opacity:'0.8' }}
         sx={{ backgroundColor: '#DEE7ED', padding: '48px',backgroundBlendMode:'darken' }}>
            <MatrimonyContainer>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '25px',
                        flexDirection: 'column'
                    }}
                >
                    <Logo />
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}
                    >
                        <Button
                            sx={{
                                color: '#66451c',
                                fontWeight: 600,
                                fontSize: '15px',
                                marginRight: { xs: '5px', md: '0px', xxl: '10px' },

                            }}
                            component={NavLink}
                            to='/'
                        >
                            <Typography variant="paragraph">Home</Typography>
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <Button
                            sx={{
                                color: '#66451c',
                                fontWeight: 600,
                                fontSize: '15px',
                                marginRight: { xs: '5px', md: '0px', xxl: '10px' },
                            }}
                            component={NavLink}
                            to='/'
                        >
                            <Typography variant="paragraph">About</Typography>
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <Button
                            sx={{
                                color: '#66451c',
                                fontWeight: 600,
                                fontSize: '15px',
                                marginRight: { xs: '5px', md: '0px', xxl: '10px' },
                            }}
                            component={NavLink}
                            to='/'
                        >
                            <Typography variant="paragraph">BioDatas</Typography>
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <Button
                            sx={{
                                color: '#66451c',
                                fontWeight: 600,
                                fontSize: '15px',
                                marginRight: { xs: '5px', md: '0px', xxl: '10px' },
                            }}
                            component={NavLink}
                            to='/'
                        >
                            <Typography variant="paragraph">ContactUS</Typography>
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <Button
                            sx={{
                                color: '#66451c',
                                fontWeight: 600,
                                fontSize: '15px',
                                marginRight: { xs: '5px', md: '0px', xxl: '10px' },
                            }}
                            component={NavLink}
                            to='/'
                        >
                            <Typography variant="paragraph">Terms</Typography>
                        </Button>
                    </Box>

                    <Box>
                        <Typography variant="paragraph" component='p'  sx={{textAlign:'center',color:'#66451c',opacity:'0.5',fontSize:'16px'}}>
                            © {new Date().getFullYear()} SomeCompany, Inc. All rights reserved.
                        </Typography>
                    </Box>
                </Box>
            </MatrimonyContainer>
        </Box>
    );
};



export default Footer;
