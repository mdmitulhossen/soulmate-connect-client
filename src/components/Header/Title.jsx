import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import head from "../../assets/lottieFile/head.json";
import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >

            <Typography
                variant="subtitle"
                sx={{
                    fontSize: { xl: "25px", sz: "18px", lg: '22px', md: '20px' },
                    fontWeight: 600,
                    textAlign: "center",
                    color: '#e58f27',
                    letterSpacing: '6px',
                }}
            >
                {subtitle}
            </Typography>
            <Typography
                variant="title"
                sx={{

                    fontSize: { xl: "45px", sz: "32px", lg: '40px', md: '35px' },
                    fontWeight: "bold",
                    textAlign: "center",
                    color: '#66451c',

                }}
            >
                {title}
            </Typography>

            <Box
                sx={{
                    width: { xl: "300px", sz: "200px", lg: '250px', md: '250px' },
                }}
            >
                <Lottie animationData={head} loop={true} autoPlay style={{ width: '100%', height: '50px' }} />
            </Box>
        </Box>
    );
};


Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
export default Title;