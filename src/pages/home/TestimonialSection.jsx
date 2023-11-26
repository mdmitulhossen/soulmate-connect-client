import TestimonialCard from "../../components/cards/TestimonialCard";
// import Swiper core and required modules
import { Navigation, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Button, Typography } from "@mui/material";
import SwiperNavButtons from "../../components/button/SwiperNavButtons";

const TestimonialSection = () => {
    return (
        <Box>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={true}
                breakpoints={{
                    1240: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>


                {/* <SwiperNavButtons /> */}
            </Swiper>


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: '20px',
                    mt: '20px',

                }}
            >
                <Button
                    sx={{
                        background: '#66451c',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: { md: '15px', sz: '12px' },
                        '&:hover': {
                            background: '#e58f27',
                            color: '#fff',
                        },
                    }}
                    // component={NavLink}
                    // to='#'
                    variant='contained'
                >
                    <Typography variant="paragraph">View More</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default TestimonialSection;