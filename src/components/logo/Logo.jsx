import { Box, Typography } from "@mui/material";
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <Box component='div' sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Box
                component='img'
                src={logo}
                sx={{ width: { md: '45px', sz: '40px' }, height: { md: '45px', sz: '40px' } }}
            >

            </Box>
            <Box>
                <Typography
                    variant="title"
                    component="p"
                    sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 700, fontSize: { md: '24px', sz: '20px' } }}
                >
                    SOULMATE
                </Typography>
                <Typography
                    variant="title"
                    component="p"
                    sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 700, fontSize: { md: '16px', sz: '14px' }, color: '#e58f27', letterSpacing: { md: '8px', sz: '6px' } }}
                >
                    CONNECT
                </Typography>
            </Box>
        </Box>
    );
};

export default Logo;