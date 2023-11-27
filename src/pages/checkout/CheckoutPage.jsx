import { Box, Button, Paper, Select, TextField, Typography } from "@mui/material";
import HeaderBreadCrumb from "../../components/breadcrumb/HeaderBreadCrumb";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";

import planIcon from '../../assets/checkout/plan.png'


const CheckoutPage = () => {
    // Get the current date
    const currentDate = new Date();

    // Add 6 months to the current date
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 6);

    // Format the dates
    const futureDateString = futureDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

    // Output the result
    // console.log("Date after 6 months:", futureDateString);


    return (
        <>
            <HeaderBreadCrumb header='Checkout' id='1' />
            <MatrimonyContainer>
                <Box
                    component='div'
                    sx={{
                        maxWidth: '980px',
                        width: '100%',
                        mx: 'auto',
                        py: '60px',
                        display: 'flex',
                        gap: '30px',
                        flexWrap: { sz: 'wrap', md: 'nowrap' }
                    }}>
                    <Box
                        component='div'
                        sx={{
                            width: {md:'30%',sz:'100%'},
                            // display: 'flex',
                            // justifyContent: 'space-between',
                            // gap: '20px',
                        }}
                    >
                        <Typography
                            variant='paragraph'
                            sx={{
                                fontSize: '20px',
                                color: '#66451c',
                                fontWeight: 500,
                                mb: '20px'
                            }}
                        >
                            Plan Details
                        </Typography>
                        <Paper
                            elevation={3}
                            sx={{
                                mt: '20px',
                                borderRadius: '10px',
                                p: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Typography
                                variant='paragraph'
                                sx={{
                                    fontSize: '14px',
                                    color: '#66451c',
                                    fontWeight: 500,
                                    mb: '10px'
                                }}
                            >
                                Current Plan
                            </Typography>

                            <Box
                                component='img'
                                src={planIcon}
                                alt='plan'
                                sx={{
                                    width: '40%',
                                    height: 'auto',
                                    mb: '20px'
                                }}
                            />
                            <Typography
                                variant='paragraph'
                                sx={{
                                    fontSize: '14px',
                                    color: '#66451c',
                                    fontWeight: 400,
                                    textAlign: 'center'
                                }}
                            >
                                Plane Name : <span style={{ fontWeight: 600 }}>Standard</span>
                            </Typography>
                            <Typography
                                variant='paragraph'
                                sx={{
                                    fontSize: '14px',
                                    color: '#66451c',
                                    fontWeight: 400,
                                    textAlign: 'center'
                                }}
                            >
                                Vilidity : <span style={{ fontWeight: 600 }}>6 Months</span>
                            </Typography>
                            <Typography
                                variant='paragraph'
                                sx={{
                                    fontSize: '14px',
                                    color: '#66451c',
                                    fontWeight: 400,
                                    textAlign: 'center'
                                }}
                            >
                                Vilid Till  <span style={{ fontWeight: 600 }}>{futureDateString}</span>
                            </Typography>

                        </Paper>
                    </Box>
                    {/* right */}
                    <Box
                        component='div'
                        sx={{
                            width: {md:'70%',sz:'100%'},
                            // display: 'flex',
                            // justifyContent: 'space-between',
                            // gap: '20px',
                        }}
                    >

                        <Typography
                            variant='paragraph'
                            sx={{
                                fontSize: '20px',
                                color: '#66451c',
                                fontWeight: 500,
                                mb: '20px'
                            }}
                        >
                            Checkout
                        </Typography>
                        <Paper
                            elevation={3}
                            sx={{
                                mt: '20px',
                                borderRadius: '10px',
                                p: '30px',
                                // display: 'flex',
                                // flexDirection: 'column',
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                // gap: '10px'
                            }}>
                            <Box
                                component='form'
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    justifyContent: 'center',
                                }}
                            // onSubmit={handleLogin}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '20px',
                                    }}
                                >
                                    <div>
                                        <label htmlFor="biodataID">BiodataID</label>
                                        <TextField disabled color="warning" fullWidth size="small" id="biodataID" value='1' variant="outlined" name="biodataID" placeholder="BioDataID" sx={{ mt: 1 }} />
                                    </div>
                                    <div>
                                        <label htmlFor="selfID">Your BioData ID</label>
                                        <TextField disabled color="warning" value='124' fullWidth size="small" id="selfID" variant="outlined" name="selfID" placeholder=" Your BioDataID" sx={{ mt: 1 }} />
                                    </div>

                                </Box>
                                <Box>
                                    <label htmlFor="selfEmail">Your Email</label>
                                    <TextField disabled color="warning" value='dev@dev.com' fullWidth size="small" id="selfEmail" variant="outlined" name="selfEmail" placeholder=" Your Email" sx={{ mt: 1 }} />
                                </Box>

                                {/* TODO: Stripe payment integrate */}

                                <Button sx={{maxWidth:'250px',mx:'auto'}} variant="contained" color="warning" size="large" type="submit">Submit</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </MatrimonyContainer>

        </>
    );
};

export default CheckoutPage;