import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropTypes from 'prop-types';


const PersonalInfoLine = ({level,value}) => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <ArrowForwardIosIcon sx={{ color: '#66451c', fontSize: '16px' }} />
                    <Typography
                        variant="paragraph"
                        sx={{
                            fontSize: '16px',
                            color: '#66451c',
                            fontWeight: 500
                        }}
                    >
                        {level.toUpperCase()}:
                    </Typography>
                </Box>
                <Typography
                    variant="paragraph"
                    sx={{
                        fontSize: '16px',
                        color: '#66451c',
                        // opacity:0.8
                    }}
                >
                    {value?value:'N/A'}
                </Typography>
            </Box>
        </div>
    );
};


PersonalInfoLine.propTypes = {
    level: PropTypes.string,
    value: PropTypes.string,
};


export default PersonalInfoLine;