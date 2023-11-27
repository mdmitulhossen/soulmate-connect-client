import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";

import ImagePreview from "./ImagePreview";
import MiniDetailCards from "./MiniDetailCards";
import ContactBioDataPage from "./ContactBioDataPage";
import PersonalInfo from "./PersonalInfo";
import HeaderBreadCrumb from "../../components/breadcrumb/HeaderBreadCrumb";
import SimilarProfileCard from "../../components/cards/SimilarProfileCard";




const BiodataDetailsPage = () => {
    return (
        <Box
            sx={{
                pb: 10,
            }}
        >
            <HeaderBreadCrumb name='developer' id='1' />
            <MatrimonyContainer>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        gap: '25px',
                        pt: 10,
                        flexWrap: {sz:'wrap',lg:'nowrap'}
                    }}
                >
                    <Box
                        component='div'
                        sx={{
                            width: {lg:'65%'},
                        }}
                    >
                        {/* Image preview */}
                        <ImagePreview />
                        {/* Details */}
                        <Box
                            component='div'
                            sx={{
                                pt: 4
                            }}
                        >
                            <Box>
                                <Box>
                                    <Typography
                                        variant="title"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '30px',
                                        }}

                                    >
                                        Sharuk Khan
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
                            </Box>
                            {/* Some card age,height,city,work */}
                            <Box
                                sx={{
                                    py: 6
                                }}
                            >
                                <MiniDetailCards age='21' height='5.5' city='DHAKA' job='WORKING' />
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed sapiente impedit nihil deleniti quibusdam ut ullam, iste est ea. Praesentium, harum deleniti. Perferendis blanditiis obcaecati ullam, ipsum magni velit recusandae pariatur veniam quo, in quis qui maiores voluptatem? Atque libero dolore eum vitae ab vero quos esse accusantium ipsa!
                                </Typography>
                            </Box>

                            <Divider />
                            {/* contact information for premimum member */}
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
                                <ContactBioDataPage />
                            </Box>

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
                                <PersonalInfo />
                            </Box>
                        </Box>
                    </Box>
                    {/* Right side */}
                    <Box
                        component='div'
                        sx={{
                            width: {lg:'35%',sz:'100%'}
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
                        <Divider/>
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
                        <SimilarProfileCard />
                        <SimilarProfileCard />
                        <SimilarProfileCard />
                        </Box>
                    </Box>
                </Box>
            </MatrimonyContainer>
        </Box>
    );
};

export default BiodataDetailsPage;