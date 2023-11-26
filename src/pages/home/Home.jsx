import { Box } from "@mui/material";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import BannerSection from "./BannerSection";
import Title from "../../components/Header/Title";
import ProfileCard from "../../components/cards/ProfileCard";
import WorkingProcessSection from "./WorkingProcessSection";
import WhyUsSecrion from "./WhyUsSecrion";
import CounterSection from "./CounterSection";
import TestimonialSection from "./TestimonialSEction";
import Footer from "../../components/footer/Footer";




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

                            gridTemplateColumns: { sz: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                        }}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                                return (<Box key={index} sx={{ gridColumn: { sz: 'span 1' }, display: 'flex', justifyContent: 'center' }}>
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


                <MatrimonyContainer>
                    <Box
                        sx={{ pt: 8, pb: 3 }}
                    >
                        <WorkingProcessSection />
                    </Box>
                </MatrimonyContainer>
            </Box>

            {/* Why Choose Us */}
            <Box
                sx={{ pt: 8, pb: 8 }}
            >
                <WhyUsSecrion />
                <CounterSection />
            </Box>

            {/* Tesrimonial section */}
            <Box
                sx={{ pt: 4, pb: 8 }}
            >
                <Title
                    title='Happy Story'
                    subtitle='OUR'
                />
                <MatrimonyContainer>
                    <Box
                        sx={{ pt: 6 }}
                    >
                        <TestimonialSection />
                    </Box>
                </MatrimonyContainer>
            </Box>

            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Home;