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
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner/Spinner";




const Home = () => {
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    const { data: premiumBioData = [], isLoading } = useQuery({
        queryKey: ['premiumBioData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/premiumBio/getPremiumBio')
            return res.data
        }
    })

    console.log(premiumBioData)
    // premiumBio/getPremiumBio

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
                            isLoading ? <Spinner />
                                :
                                premiumBioData?.map((item, index) => {
                                    return (<Box key={index} sx={{ gridColumn: { sz: 'span 1' }, display: 'flex', justifyContent: 'center' }}>
                                        <ProfileCard data={item} />
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

        </Box>
    );
};

export default Home;