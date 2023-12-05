import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import loginBg from '../../assets/Login/loginBg.jpg'
import loginCouple from '../../assets/Login/login-couple.png'
import Marquee from "react-fast-marquee";
import margueImg from '../../assets/Login/loginMarque.png'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import ButtonLoader from "../../components/Spinner/ButtonLoader";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const LoginPage = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const { loading, signInWithEmailPassword, setLoading, googleSignIn } = useAuth() || {};

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // const newUser = { email, password };
        // // console.log(newUser);
        signInWithEmailPassword(email, password)
            .then((result) => {
                setLoading(false);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
                toast.error(err.message);
            });
    }


    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                axiosPublic.post('/users/create', { name: result.user.displayName, email: result.user.email }).then(res => {console.log(res)}).catch(err => {console.log(err)})
                setLoading(false);
                console.log("googlr",result)
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful");
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            });
    };
    return (
        <Box
            component='div'
            sx={{
                width: '100%',
                backgroundImage: `url(${loginBg})`,
                py: '100px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundColor:'#66451c',
                // backgroundColor:'#f2d282',
                backgroundColor: '#FEFBF3',
                backgroundBlendMode: 'darken',
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
                            Find your life partner <br />
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
                                START FOR FREE
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
                                Sign In to Matrimony
                            </Typography>
                            <Typography
                                component='p'
                                variant="paragraph"
                                sx={{
                                    color: '#000',
                                    fontSize: { md: '14px', sz: '14px' },
                                    fontWeight: 500,
                                    opacity: 0.7
                                }}
                            >
                                Not A Membar? <span onClick={() => navigate('/ragister')} style={{ color: '#66451c', cursor: 'pointer', fontWeight: 600 }}>Ragister Now</span>
                            </Typography>
                        </Box>

                        <Divider />

                        <Box
                            component='div'
                            sx={{
                                py: '35px'
                            }}
                        >
                            <Box
                                component='form'
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}
                                onSubmit={handleLogin}
                            >

                                <TextField autoComplete="on" color="warning" fullWidth size="small" id="outlined-basic" label="Email" variant="outlined" name="email" placeholder="Enter Your Email" />
                                <TextField type="password" autoComplete="on" color="warning" fullWidth size="small" id="outlined-basic" label="Password" variant="outlined" name="password" placeholder="Enter Your Password" />

                                <Button variant="contained" color="warning" size="large" type="submit">
                                {loading ? <ButtonLoader size={12} color='#fff' /> : "Sign In"}
                                    
                                </Button>
                            </Box>
                        </Box>

                        <Divider>OR</Divider>

                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                pt: '20px',
                                gap: '10px'
                            }}
                        >
                            <Button onClick={handleGoogleSignIn} variant="contained" color="inherit" size="large" type="submit" sx={{ fontSize: '12px', width: '100%', fontWeight: 600 }}>
                                {loading ? <ButtonLoader size={12} color='#e58f27' /> : "Sign In with Google"}
                            </Button>
                            <Button disabled variant="contained" color="inherit" size="large" type="submit" sx={{ fontSize: '12px', width: '100%', fontWeight: 600 }}>Sign In Github</Button>

                        </Box>

                    </Box>
                </Paper>
            </MatrimonyContainer>
        </Box>
    );
};

export default LoginPage;