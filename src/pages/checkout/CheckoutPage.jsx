import { Box, Paper, Typography } from "@mui/material";
import HeaderBreadCrumb from "../../components/breadcrumb/HeaderBreadCrumb";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";

import planIcon from '../../assets/checkout/plan.png'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from 'react-router-dom';
import useAxiosPublic from "../../hooks/useAxiosPublic";

import CheckoutForm from "../../components/form/CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner/Spinner";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLICK_KEY);

const CheckoutPage = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    // Get the current date
    const currentDate = new Date();

    // Add 6 months to the current date
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 6);

    // Format the dates
    const futureDateString = futureDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

    const { data: biodata = {}, isLoading } = useQuery({
        queryKey: ['bioDataPayment', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/biodata/${id}`)
            return res.data
        }
    })

    if(isLoading) return <Spinner/>



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
                            width: { md: '30%', sz: '100%' },
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
                            <Typography
                                variant='paragraph'
                                sx={{
                                    fontSize: '14px',
                                    color: '#66451c',
                                    fontWeight: 400,
                                    textAlign: 'center'
                                }}
                            >
                                Amount  <span style={{ fontWeight: 600 }}>599 TK</span>
                            </Typography>

                        </Paper>
                    </Box>
                    {/* right */}
                    <Box
                        component='div'
                        sx={{
                            width: { md: '70%', sz: '100%' },
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




                            {/* TODO: Stripe payment integrate */}

                            <Box>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm data={biodata}/>
                                </Elements>
                            </Box>




                        </Paper>
                    </Box>
                </Box>
            </MatrimonyContainer>
        </>
    );
};

export default CheckoutPage;