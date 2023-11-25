import { Box, Grid } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import BannerSection from "./BannerSection";
import Title from "../../components/Header/Title";
import ProfileCard from "../../components/cards/ProfileCard";



const Home = () => {

    return (
        <Box>
            <BannerSection />

            {/* profile section */}
            <Box
             sx={{py:2}}
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
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={2}
                        sx={{
                            border: 1
                        }}
                    >
                        <Box gridColumn="span 3">
                            <ProfileCard name='md mitul hossain' />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                        <Box gridColumn="span 3">
                            <ProfileCard />
                        </Box>
                    </Box>


                    {/* <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard /> */}

                </MatrimonyContainer>
            </Box>

            {/* How it Works */}
            <Box
            sx={{pt:8}}
            >
                <Title
                    title='How it Works'
                    subtitle='MOMENTS'
                />
            </Box>

        </Box>
    );
};

export default Home;