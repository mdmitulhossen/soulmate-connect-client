import { Box, Button, Chip, Divider, IconButton, Typography } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";

import ImagePreview from "./ImagePreview";
import MiniDetailCards from "./MiniDetailCards";
import ContactBioDataPage from "./ContactBioDataPage";
import PersonalInfo from "./PersonalInfo";
import HeaderBreadCrumb from "../../components/breadcrumb/HeaderBreadCrumb";
import SimilarProfileCard from "../../components/cards/SimilarProfileCard";
import { NavLink,useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";


const BiodataDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const {user}= useAuth() || {};

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    const { data: biodata = {}, isLoading } = useQuery({
        queryKey: ['bioDataById', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/biodata/${id}`)
            return res.data
        }
    })
    


    const { B_ID, name, email, phone, image, fatherName, motherName, gender, dob, height, weight, occupation, race, presentDivision, parmanentDivision, partnerAge, partnerHeight, partnerWeight, married, age } = biodata || {};

    const { data: biodataByGender = [], isLoading:genderLoading } = useQuery({
        queryKey: ['biodataByGender', gender],
        queryFn: async () => {
            const res = await axiosPublic.get(`/biodata?gender=${gender}`)
            return res.data
        }
    })
    const { data: isPremiumUser = {}, isLoading:isPremiumLoading } = useQuery({
        queryKey: ['isPremiumUser', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/user?email=${user?.email}`)
            return res.data
        }
    })

console.log("sdfjksaif===>",isPremiumUser)

    const premium = isPremiumUser?.premium || false;    
    const favourite = false;
    if(isLoading || genderLoading || isPremiumLoading) return <Spinner/>
    return (
        <Box
            sx={{
                pb: 10,
            }}
        >
            <HeaderBreadCrumb header='biodata details' id={B_ID} />
            <MatrimonyContainer>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        gap: '25px',
                        pt: 10,
                        flexWrap: { sz: 'wrap', lg: 'nowrap' }
                    }}
                >
                    <Box
                        component='div'
                        sx={{
                            width: { lg: '65%' },
                        }}
                    >
                        {/* Image preview */}
                        <Box
                            component='img'
                            src={image}
                            alt='user'
                            sx={{
                                width: '100%',
                                height: '350px',
                                borderRadius: '5px',
                            }}
                        />
                        {/* <ImagePreview /> */}
                        {/* Details */}
                        <Box
                            component='div'
                            sx={{
                                pt: 4
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mt: 3,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="title"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '30px',
                                        }}

                                    >
                                        {name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '10px',
                                            mt: 1
                                        }}
                                    >
                                        <Chip
                                            size="small"
                                            label="Available"
                                            sx={{
                                                bgcolor: '#5BBC71',
                                                borderRadius: '5px',
                                                fontSize: '12px',
                                                py: '0px',
                                                px: 2,
                                                color: '#fff',
                                                fontWeight: 500
                                            }}
                                        />
                                        <Chip
                                            size="small"
                                            label="100 Viewers"
                                            sx={{
                                                bgcolor: '#e58f27',
                                                borderRadius: '5px',
                                                fontSize: '12px',
                                                py: '0px',
                                                px: 2,
                                                color: '#fff',
                                                fontWeight: 500
                                            }}
                                        />
                                    </Box>
                                </Box>
                                {/* Todo: favourite and request btn */}
                                <Box>
                                    <Button
                                    disabled={premium}
                                        sx={{
                                            background: '#66451c',
                                            color: '#fff',
                                            fontWeight: 600,
                                            fontSize: '12px',
                                            '&:hover': {
                                                background: '#e58f27',
                                                color: '#fff',
                                            },
                                        }}
                                        onClick={()=>navigate(`/checkout/${B_ID}`)}
                                        component={NavLink}
                                        to='#'
                                        variant='contained'
                                    >
                                        <Typography variant="paragraph"> Request For Contact</Typography>
                                    </Button>
                                    <IconButton sx={{ ml: 2 }}>
                                        {
                                            favourite ? <FavoriteIcon sx={{ color: '#66451c' }} fontSize="large" /> : <FavoriteBorderIcon sx={{ color: '#66451c' }} fontSize="large" />
                                        }
                                    </IconButton>
                                </Box>
                            </Box>
                            {/* Some card age,height,city,work */}
                            <Box
                                sx={{
                                    py: 6
                                }}
                            >
                                <MiniDetailCards age={age} height={height} city={presentDivision} job={occupation} />
                            </Box>

                            {/* about me */}
                            <Box
                                sx={{
                                    pb: 6
                                }}
                            >
                                <Typography
                                    component='p'
                                    variant="paragraph"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '22px',
                                        color: '#66451c'
                                    }}
                                >
                                    ABOUT ME
                                </Typography>
                                <Typography
                                    component='p'
                                    variant="paragraph"
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '15px',
                                        color: '#66451c',
                                        opacity: 0.8,
                                        mt: 1
                                    }}
                                >
                                    {`   "Hello! I'm ${name}, a ${occupation} based in ${presentDivision}. 

                                    Beyond my professional life, I find joy in my Hobbies or Interests, whether it' or exploring the vibrant ${parmanentDivision} scene. I'm driven by a curiosity for  Philosophies and am always seeking new challenges that push me to grow.`}
                                </Typography>
                            </Box>

                            <Divider />
                            {/* contact information for premimum member */}
                            {
                                premium &&
                                <Box
                                    sx={{
                                        py: 3
                                    }}
                                >  <Typography
                                    component='p'
                                    variant="paragraph"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '22px',
                                        color: '#66451c',
                                        mb: 2
                                    }}
                                >
                                        CONTACT INFO
                                    </Typography>
                                    <ContactBioDataPage phone={phone} email={email} address={presentDivision} />
                                </Box>
                            }

                            <Divider />
                            {/* personal information */}
                            <Box
                                sx={{
                                    py: 3
                                }}
                            >  <Typography
                                component='p'
                                variant="paragraph"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '22px',
                                    color: '#66451c',
                                    mb: 4
                                }}
                            >
                                    PERSONAL INFORMATION
                                </Typography>
                                <PersonalInfo data={biodata}/>
                            </Box>
                        </Box>
                    </Box>
                    {/* Right side */}
                    <Box
                        component='div'
                        sx={{
                            width: { lg: '35%', sz: '100%' }
                        }}
                    >
                        <Typography
                            component='p'
                            variant="paragraph"
                            sx={{
                                fontSize: '22px',
                                color: '#66451c',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            Similar Profile
                        </Typography>
                        <Divider />
                        <Box
                            component='div'
                            sx={{
                                py: 3,
                                display: 'grid',
                                columnGap: '20px',
                                rowGap: '60px',
                                // flexWrap: 'wrap'
                                gridTemplateColumns: 'repeat(2,1fr)',
                            }}
                        >
                            {
                                biodataByGender?.map((item) => (
                                    <SimilarProfileCard key={item.B_ID} data={item} />
                                ))
                            }
                            
                        </Box>
                    </Box>
                </Box>
            </MatrimonyContainer>
        </Box>
    );
};

export default BiodataDetailsPage;