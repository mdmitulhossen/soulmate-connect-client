import { Box } from "@mui/material";

import test1 from '../../assets/BiodataDetails/1.jpeg'
import test2 from '../../assets/BiodataDetails/2.jpg'
import test3 from '../../assets/BiodataDetails/3.jpg'
import { useState } from "react";


const ImagePreview = () => {
    const imgages = [test1, test2, test3]
    const [mainImage, setMainImage] = useState(imgages[0])

    return (
        <Box
            sx={{
                display: 'flex',
                gap: '15px',
            }}
        >
            <Box
                component='img'
                src={mainImage}
                alt='test1'
                sx={{
                    width: '70%',
                    height: '350px'
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    width: '30%',
                    height: '350px',
                    overflow: 'auto',
                    overflowY: 'scroll',
                    '::-webkit-scrollbar': {
                        width: '4px'
                    },
                    '::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 1px #B2694F',
                        borderRadius: '5px'
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(188, 167, 160,0.8)',

                        borderRadius: '5px'
                    }
                }}
            >
                {
                    imgages.map((image, index) => (
                        <Box
                            key={index}
                            onClick={() => setMainImage(image)}
                            component='img'
                            src={image}
                            alt='user'
                            sx={{
                                width: '100%',
                                // height: '150px',
                                cursor: 'pointer',
                                border: mainImage === image ? '4px solid #e58f27' : 'none'
                            }}
                        />
                    ))
                }
            </Box>
        </Box>
    );
};

export default ImagePreview;