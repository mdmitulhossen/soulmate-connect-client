import { Box, Typography } from "@mui/material";
import ageIcon from '../../assets/BiodataDetails/Icons/age-group.png'
import cityIcon from '../../assets/BiodataDetails/Icons/city.png'
import heightIcon from '../../assets/BiodataDetails/Icons/height.png'
import workingIcon from '../../assets/BiodataDetails/Icons/working.png'

const MiniDetailCards = ({age,height,city,job}) => {
    return (
        <Box
         component='div'
            sx={{
                display: 'flex',
                gap: '15px',
                flexWrap: {sz:'wrap',lg:'nowrap'}
            }}
        >
            <Box
            component='div'
             sx={{
                flexGrow:1,
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding:'20px',
                border:'1px solid rgba(221, 169, 108,0.5)',
                borderRadius:'8px',
                flexDirection:'column'
             }}
            >
                <Box
                    component='img'
                    src={cityIcon}
                    alt='city'
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
                <Typography
                   component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '18px',
                        color: '#e58f27',
                    }}
                >
                 CITY
                </Typography>
                <Typography
                component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '20px',
                        color: '#e58f27',
                        fontWeight: 'bold'
                    }}
                >
                 {city}
                </Typography>
            </Box>
            <Box
            
            component='div'
             sx={{
                flexGrow:1,
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding:'20px',
                border:'1px solid rgba(221, 169, 108,0.5)',
                borderRadius:'8px',
                flexDirection:'column'
             }}
            >
                <Box
                    component='img'
                    src={ageIcon}
                    alt='city'
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
                <Typography
                   component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '18px',
                        color: '#e58f27',
                    }}
                >
                 {age}
                </Typography>
                <Typography
                component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '20px',
                        color: '#e58f27',
                        fontWeight: 'bold'
                    }}
                >
                 21
                </Typography>
            </Box>
            <Box
            component='div'
             sx={{
                flexGrow:1,
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding:'20px',
                border:'1px solid rgba(221, 169, 108,0.5)',
                borderRadius:'8px',
                flexDirection:'column'
             }}
            >
                <Box
                    component='img'
                    src={heightIcon}
                    alt='city'
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
                <Typography
                   component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '18px',
                        color: '#e58f27',
                    }}
                >
                 HEIGHT
                </Typography>
                <Typography
                component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '20px',
                        color: '#e58f27',
                        fontWeight: 'bold'
                    }}
                >
                 {height}
                </Typography>
            </Box>
            <Box
            component='div'
             sx={{
                flexGrow:1,
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding:'20px',
                border:'1px solid rgba(221, 169, 108,0.5)',
                borderRadius:'8px',
                flexDirection:'column'
             }}
            >
                <Box
                    component='img'
                    src={workingIcon}
                    alt='city'
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
                <Typography
                   component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '18px',
                        color: '#e58f27',
                    }}
                >
                 JOB
                </Typography>
                <Typography
                component='p'
                    variant="paragraph"
                    sx={{
                        fontSize: '20px',
                        color: '#e58f27',
                        fontWeight: 'bold'
                    }}
                >
                 {job}
                </Typography>
            </Box>

        </Box>
    );
};

export default MiniDetailCards;