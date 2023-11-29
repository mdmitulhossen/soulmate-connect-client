import { Box, Button, Paper, Typography, Chip } from "@mui/material";
import PersonalInfo from "../../biodatadetails/PersonalInfo";
import test from '../../../assets/BiodataDetails/1.jpeg'
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";
import ButtonLoader from "../../../components/Spinner/ButtonLoader";

const ViewBioData = () => {

    const { user } = useAuth() || {};
    const axiosPublic = useAxiosPublic()
    const [bioData, setBioData] = useState(null);
    const [premiumData, setPremiumData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [premiumLoading, setPremiumLoading] = useState(false);



    useEffect(() => {
        setDataLoading(true)
        axiosPublic.get(`/biodata?email=${user.email}`)
            .then(res => {
                setDataLoading(false)
                setBioData(res.data)
            })
            .catch(err => {
                setDataLoading(false)
                console.log(err)
            })
    }, [user, axiosPublic])


    // premimum data
    useEffect(() => {
        setDataLoading(true)
        axiosPublic.get(`/premiumBio/getOne?email=${user.email}`)
            .then(res => {
                setDataLoading(false)
                setPremiumData(res.data)
            })
            .catch(err => {
                setDataLoading(false)
                console.log(err)
            })
    }, [user, axiosPublic])

    if (dataLoading) return <Spinner />

    const handleMakePremium = () => {
        Swal.fire({
            title: "Do you want to Make biodata to premium?",
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: "Yes, Make it!",
            denyButtonText: `Don't it`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const newData = {
                    B_ID: bioData?.B_ID,
                    name: bioData?.name,
                    email: bioData?.email,
                    isPremium: false,
                }
                setPremiumLoading(true)
                axiosPublic.post(`/premiumBio/create`, newData)
                    .then(res => {
                        console.log(res)
                        setPremiumLoading(false)
                        Swal.fire("Requested Successfully", "", "success");
                    }).catch(err => {
                        console.log(err)
                        setPremiumLoading(false)
                        Swal.fire("Requested is denied", "", "info");
                    })
            } else if (result.isDenied) {
                Swal.fire("Requested is denied", "", "info");
            }
        });
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2
                }}
            >
                <Typography
                    variant='paragraph'
                    sx={{
                        fontSize: '24px',
                        fontWeight: 600
                    }}
                >
                    View Your Bio Data
                </Typography>
                {
                    premiumData?.isPremium ? <Chip label="Premiumed" sx={{ bgcolor: '#718FA0', borderRadius: '5px', fontWeight: 600, color: '#fff', fontSize: '12px' }} />
                        :
                        <Button disabled={premiumData} onClick={handleMakePremium} sx={{ fontSize: '12px', fontWeight: 600 }} variant="contained" color="warning" size="large" type="submit">
                            {premiumLoading ? <ButtonLoader size={12} color='#fff' /> : 'Make  premium'}
                        </Button>
                }

            </Box>
            <Paper
                elevation={2}
                sx={{
                    p: { sz: 1, lg: 3, xl: 4 },
                    borderRadius: 2,
                    mt: 2,
                    bgcolor: 'transparent',
                    border: '1px dashed #000',
                    // // display: 'flex',
                    // gap: '20px',
                    // alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 4
                    }}
                >
                    <Box
                        component='img'
                        src={bioData?.image ? bioData?.image : test}
                        alt='test'
                        sx={{
                            width: '50%',
                            // height: '200px',
                            borderRadius: '10px'
                        }}
                    />
                </Box>
                {/* info */}
                <Box
                    sx={{ width: '100%' }}
                >
                    {/* <Typography
                        component='p'
                        variant='paragraph'
                        sx={{
                            mb: 2,
                            fontSize: '18px',
                            fontWeight: 600
                        }}
                    >
                        Personal Information
                    </Typography> */}
                    <PersonalInfo data={bioData} />
                </Box>
            </Paper>
        </div>
    );
};

export default ViewBioData;