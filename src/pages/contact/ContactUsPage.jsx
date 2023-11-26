import { Box, Chip, IconButton, Paper, Typography } from "@mui/material";
import icon1 from '../../assets/Home/whyChoose/icon1.png'
import icon2 from '../../assets/Home/whyChoose/icon2.png'
import icon3 from '../../assets/Home/whyChoose/ICON5.png'
import CounterSection from "../home/CounterSection";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import QueryForm from "./QueryForm";

const ContactUsPage = () => {
    return (
        <Box
            sx={{
                pb: 10
            }}
        >
            <Box
                sx={{ height: { md: '350px', sz: '250px' }, background: 'linear-gradient(to right, #2a262691, #2a2c3c)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '0px 20px' }}
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
                    WE ARE HERE TO ASSIST YOU
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
                    Contact us
                </Typography>
                <Typography
                    variant="paragraph"
                    component='p'
                    sx={{
                        color: '#fff',
                        opacity: 0.6,
                        fontSize: { md: '20px', sz: '16px' },
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
                    marginTop: { md: '-50px', sz: '-30px' },
                    margin: '0 auto',
                }}
            >
                <Paper elevation={2} sx={{ bgcolor: '#fff', width: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '24px', fontWeight: 600, color: '#66451c' }}
                    >
                        Our Office
                    </Typography>
                    <Box
                        component='div'
                        // variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <IconButton sx={{ border: '1px solid gray', borderRadius: '10px' }} size="small">
                            <PhoneForwardedIcon fontSize="small" />
                        </IconButton>
                        <Typography
                            component='p'
                            variant="paragraph"
                            sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c' }}>
                            +880 123456789
                        </Typography>
                    </Box>
                    <Box
                        component='div'
                        // variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <IconButton sx={{ border: '1px solid gray', borderRadius: '10px' }} size="small">
                            <EmailIcon fontSize="small" />
                        </IconButton>
                        <Typography
                            component='p'
                            variant="paragraph"
                            sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c' }}>
                            dev@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        component='div'
                        // variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <IconButton sx={{ border: '1px solid gray', borderRadius: '10px' }} size="small">
                            <LocationOnIcon fontSize="small" />
                        </IconButton>
                        <Typography
                            component='p'
                            variant="paragraph"
                            sx={{ fontSize: '14px', fontWeight: 500, color: '#66451c' }}>
                            123,Mirpur,Dhaka
                        </Typography>
                    </Box>
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
                        sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', color: '#66451c' }}
                    >
                        CUSTOMER RELATIONS
                    </Typography>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', color: '#66451c' }}
                    >
                        The most trusted wedding matrimony brand
                    </Typography>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Chip label="Support" />
                    </Box>
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
                        sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'center', color: '#66451c' }}
                    >
                        WHATSAPP SUPPORT
                    </Typography>
                    <Typography
                        component='p'
                        variant="paragraph"
                        sx={{ fontSize: '14px', fontWeight: 500, textAlign: 'center', color: '#66451c' }}
                    >
                        Most Trusted and premium Matrimony Service in the World.
                    </Typography>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Chip label="Talk" />
                    </Box>
                </Paper>
            </Box>

            {/* Query Form */}
            <Box>
                <QueryForm />
            </Box>

        </Box>
    );
};

export default ContactUsPage;