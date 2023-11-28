import { Box,Typography } from "@mui/material";
import dataNotFoundImage from '../assets/dataNotFound.png'

const DataNotFound = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'relative'
            }}
        >
            <Box
                component='img'
                src={dataNotFoundImage}
                alt='not found'
                sx={{ width: '40%', height: '80%', borderRadius: '5px' }}
            />
            <Typography sx={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#66451c',
                marginLeft: '10px',
                position: 'absolute',
                bottom: '0px',
                left: '50%',
                transform: 'translateX(-50%)'
            
            }} variant="paragraph">No Data Here</Typography>

        </Box>
    );
};

export default DataNotFound;