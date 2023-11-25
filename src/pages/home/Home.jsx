import { Box, Grid } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import BannerSection from "./BannerSection";
import Title from "../../components/Header/Title";
import ProfileCard from "../../components/cards/ProfileCard";
import WorkingProcessSection from "./WorkingProcessSection";



const Home = () => {

    return (
        <Box>
            <BannerSection />

            {/* profile section */}
            <Box
                sx={{ py: 2 }}
            >
                {/* Title */}
                <Box sx={{ py: 5 }}>
                    <Title
                        title='Our Groom & Bride'
                        subtitle='PROFILE'
                    />
                </Box>
                {/* ProfileCard */}
                <MatrimonyContainer>
                    <Box
                        display="grid"
                        gap={2}
                        sx={{
                            border: 1,
                            gridTemplateColumns: { sz: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                        }}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                               return ( <Box key={index} sx={{ gridColumn: { sz: 'span 1' },display:'flex',justifyContent:'center' }}>
                                    <ProfileCard name='md mitul hossain' />
                                </Box>)
                            })
                        }

                    </Box>


                    {/* <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard /> */}

                </MatrimonyContainer>
            </Box>

            {/* How it Works */}
            <Box
                sx={{ pt: 8 }}
            >
                <Title
                    title='How it Works'
                    subtitle='MOMENTS'
                />
            </Box>

            <MatrimonyContainer>
                <Box
                    sx={{ pt: 8, pb: 3 }}
                >
                    <WorkingProcessSection />
                </Box>
            </MatrimonyContainer>

        </Box>
    );
};

export default Home;