import { Box, Typography } from "@mui/material";
import bannerVideo from '../../assets/Home/banner/bg-video.mp4'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const BannerSection = () => {
    return (
        <Box
            component='div'
            sx={{
                height: { xl: "650px", md: "500px", lg: '600px',sz: '400px' },
                width: "100%",
                position: "relative",
            }}
        >
            <Box
                component='video'
                autoPlay
                loop
                muted
                sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",

                }}

            >
                <source src={bannerVideo} type="video/mp4" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="title"
                    sx={{
                        color: "white",
                        fontSize: { xl: "60px", sz: "36px", lg: '52px',md: '45px' },
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: "1rem",

                    }}
                >
                    Someone Special is <br /> Waiting For You
                </Typography>
                <Box
                    component='div'
                    sx={{
                        pt: '10px',
                        display: "flex",
                        gap: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            gap: '8px',
                            color: '#FAAC1D',
                            fontSize: { xl: "24px", sz: "16px", lg: '18px' },
                        }}
                    >
                        <AppRegistrationIcon />
                        <Typography
                        sx={{
                            fontSize: { xl: "20px", sz: "16px", lg: '18px' },
                            color: '#fff',
                            fontWeight: 400,
                        }}
                        >
                            SIGN UP
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            gap: '8px',
                            color: '#FAAC1D',
                            fontSize: { xl: "24px", sz: "16px", lg: '18px' },
                        }}
                    >
                        <GroupAddIcon />
                        <Typography
                        sx={{
                            fontSize: { xl: "20px", sz: "16px", lg: '18px' },
                            fontWeight: 400,
                            color: '#fff',
                        }}
                        >
                            CONNECT
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            gap: '8px',
                            color: '#FAAC1D',
                            fontSize: { xl: "24px", sz: "16px", lg: '18px' },
                        }}
                    >
                        <ContactSupportIcon />
                        <Typography
                        sx={{
                            fontSize: { xl: "20px", sz: "16px", lg: '18px' },
                            fontWeight: 400,
                            color: '#fff',
                        }}
                        >
                            INTERECT
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BannerSection;