import { Box, Paper, Typography } from "@mui/material";
import whyManImage from "../../assets/Home/whyChoose/whyus_Men.png";

import icon1 from '../../assets/Home/whyChoose/icon1.png'
import icon2 from '../../assets/Home/whyChoose/icon2.png'
import icon3 from '../../assets/Home/whyChoose/icon4.png'

const WhyUsSecrion = () => {
    return (
        <Box
            sx={{ width: '100%', position: 'relative' }}
        >
            <Box
                sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <Box
                    component='img'
                    src={whyManImage}

                    sx={{
                        margin: '0 auto',
                        width: { md: '500px', sz: '280px', zIndex: 100 }
                    }}
                />
            </Box>


            <Box
                sx={{ height: { md: '400px', sz: '250px' }, background: 'linear-gradient(to right, #2a262691, #66451c)', marginTop: { md: '-130px', sz: '-70px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',padding:'0px 20px' }}
            >
                <Typography
                    variant="subtitle"
                    sx={{
                        color: '#e58f27',
                        fontSize: { xl: '30px', sz: '18px', lg: '22px', md: '20px' },
                        fontWeight: 600,
                        textAlign: 'center',
                        letterSpacing: '5px',

                    }}
                >
                    #1 Matromony
                </Typography>
                <Typography
                    variant="title"
                    component='p'
                    sx={{
                        color: 'transparent',
                        fontSize: { xl: '60px', sz: '40px', lg: '50px' },
                        fontWeight: 800,
                        textAlign: 'center',
                        background: 'linear-gradient(to right, #f7971e, #ffd200)',
                        backgroundClip: 'text',
                    }}
                >
                    Why Choose Us
                </Typography>
                <Typography
                    variant="paragraph"
                    component='p'
                    sx={{
                        color: '#fff',
                        opacity: 0.6,
                        fontSize: {md:'20px',sz:'16px'},
                        fontWeight: 500,
                        textAlign: 'center',
                    }}
                >
                    Most Trusted and premium Matrimony Service in the World.
                </Typography>


            </Box>


            <Box
                sx={{
                    maxWidth: '1240px',
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                    marginTop:{md:'-50px',sz:'-30px'},
                    margin:'0 auto',
                }}
            >
                <Paper elevation={2} sx={{ bgcolor: '#fff', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box
                        component='img'
                        src={icon1}

                        sx={{
                            margin: '0 auto',
                            width: '50px'
                        }}
                    />
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '20px', fontWeight: 600, textAlign: 'center', color: '#66451c' }}
                    >
                        Genuine profiles
                    </Typography>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', color: '#66451c' }}
                    >
                        Contact genuine profiles with 100% verified mobile
                    </Typography>
                </Paper>

                <Paper elevation={2} sx={{ bgcolor: '#fff', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box
                        component='img'
                        src={icon2}

                        sx={{
                            margin: '0 auto',
                            width: '50px'
                        }}
                    />
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '20px', fontWeight: 600, textAlign: 'center', color: '#66451c' }}
                    >
                        Most trusted
                    </Typography>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', color: '#66451c' }}
                    >
                        The most trusted wedding matrimony brand lorem
                    </Typography>
                </Paper>

                <Paper elevation={2} sx={{ bgcolor: '#fff', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Box
                        component='img'
                        src={icon3}

                        sx={{
                            margin: '0 auto',
                            width: '50px'
                        }}
                    />
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '20px', fontWeight: 600, textAlign: 'center', color: '#66451c' }}
                    >
                        2000+ weddings
                    </Typography>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', color: '#66451c' }}
                    >
                        Lakhs of peoples have found their life partner
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default WhyUsSecrion;