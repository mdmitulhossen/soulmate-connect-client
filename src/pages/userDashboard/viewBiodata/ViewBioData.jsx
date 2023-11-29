import { Box, Button, Paper, Typography } from "@mui/material";
import PersonalInfo from "../../biodatadetails/PersonalInfo";
import test from '../../../assets/BiodataDetails/1.jpeg'
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";

const ViewBioData = () => {

    const { user } = useAuth() || {};
    const axiosPublic = useAxiosPublic()
    const [bioData, setBioData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);



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
                Swal.fire("Requested Successfully", "", "success");
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
                <Button onClick={handleMakePremium} sx={{ fontSize: '12px', fontWeight: 600 }} variant="contained" color="warning" size="large" type="submit"> Make  premium</Button>
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
                        src={test}
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
                    <PersonalInfo data={bioData}/>
                </Box>
            </Paper>
        </div>
    );
};

export default ViewBioData;