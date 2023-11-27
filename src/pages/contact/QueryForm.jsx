import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import loginBg from '../../assets/Login/loginBg.jpg'
import loginCouple from '../../assets/Login/login-couple.png'
import Marquee from "react-fast-marquee";
import margueImg from '../../assets/Login/loginMarque.png'


const QueryForm = () => {

    const handleRigister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const newUser = { name, email, message };
        console.log(newUser);
    }
    return (
        <Box
            component='div'
            sx={{
                width: '100%',
                pt: '100px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <MatrimonyContainer>
                <Paper
                    elevation={2}
                    component='div'
                    sx={{
                        maxWidth: '900px',
                        mx: 'auto',
                        display: 'flex',
                        borderRadius: '20px',
                        flexDirection: { md: 'row', sz: 'column' },
                    }}
                >
                    {/* left */}

                    <Box
                        component='div'
                        sx={{
                            width: { md: '40%', sz: '100%' },
                            bgcolor: '#FFEEB2',
                            borderRadius: '10px 0px 0px 10px',
                            padding: '0 30px 30px 30px',
                            position: 'relative'
                        }}
                    >
                        <Typography
                            component='p'
                            variant="title"
                            sx={{
                                color: '#66451c',
                                fontSize: { md: '50px', sz: '30px' },
                                fontWeight: 600,
                            }}
                        >
                            <span style={{ fontWeight: 500, fontSize: '30px' }}>Now</span> <br />
                            Contact To Us <br />
                            <span style={{ fontWeight: 500, fontSize: '30px' }}>Easy and fast.</span>
                        </Typography>
                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                pt: '30px'
                            }}>
                            <img src={loginCouple} alt="loginCouple" style={{ width: '50%', height: 'auto' }} />
                        </Box>

                        <Box
                            component='div'
                            sx={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                height: '80px',
                                overflow: 'hidden',

                            }}
                        >
                            <Marquee>
                                <img src={margueImg} alt="margueImg" style={{ width: '100%', height: '100%' }} />
                            </Marquee>

                        </Box>

                    </Box>



                    {/* right */}
                    <Box
                        component='div'
                        sx={{
                            width: { md: '60%', sz: '100%' },
                            bgcolor: '#fff',
                            padding: '50px',
                            borderRadius: '0px 10px 10px 0px'
                        }}
                    >
                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                pb: '20px'
                            }}
                        >
                            <Typography
                                component='p'
                                variant="paragraph"
                                sx={{
                                    color: '#66451c',
                                    fontSize: { md: '16px', sz: '12px' },
                                    fontWeight: 500,
                                }}
                            >
                                LET'S TALK
                            </Typography>
                            <Typography
                                component='p'
                                variant="title"
                                sx={{
                                    color: '#000',
                                    fontSize: { md: '25px', sz: '20px' },
                                    fontWeight: 600,
                                }}
                            >
                                Send your enquiry now
                            </Typography>

                        </Box>

                        <Divider />

                        <Box
                            component='div'
                            sx={{
                                pt: '30px'
                            }}
                        >
                            <Box
                                component='form'
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}
                                onSubmit={handleRigister}
                            >
                                <TextField color="warning" fullWidth size="small" id="outlined-basic" label="Name" variant="outlined" name="name" placeholder="Enter Your Name" />
                                <TextField color="warning" fullWidth size="small" id="outlined-basic" label="Email" variant="outlined" name="email" placeholder="Enter Your Email" />

                                <TextField color="warning" fullWidth multiline
                                    rows={4} size="small" id="outlined-basic" label="message" variant="outlined" name="message" placeholder="Your Message" />
                                <Button variant="contained" color="warning" size="large" type="submit">Send Enquiry</Button>
                            </Box>
                        </Box>

                    </Box>
                </Paper>
            </MatrimonyContainer>
        </Box>
    );
};

export default QueryForm;