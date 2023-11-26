import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper();
    return (
        // swiper-nav-btns
        <div className="absolute w-full  top-1/2 z-40 flex justify-between items-center">
            <button onClick={() => swiper.slidePrev()} className='p-2 flex justify-center items-center rounded-full bg-[#FF3811]/60 hover:bg-[#FF3811] duration-200'>
                <box-icon name='left-arrow-alt' color='white' size='sm' ></box-icon>
            </button>
            
            <button onClick={() => swiper.slideNext()} className='p-2 flex justify-center items-center rounded-full bg-[#FF3811]/60 hover:bg-[#FF3811] duration-200'>
                <box-icon name='right-arrow-alt' color='white' size='sm' ></box-icon>
            </button>
        </div>
    );
};

export default SwiperNavButtons;