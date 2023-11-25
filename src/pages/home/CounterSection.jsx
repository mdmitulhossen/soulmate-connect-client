import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const CounterSection = () => {
    return (
        <MatrimonyContainer>
            <Box 
            sx={{mt:'70px'}}
            >
                <Box display="grid" sx={{gridTemplateColumns:{sz:"repeat(3, 1fr)",sm:"repeat(6, 1fr)",lg:"repeat(12, 1fr)"},gap:{lg:'0px',sz:'20px'}}}>
                    <Box gridColumn="span 3" sx={{ display: 'flex', flexDirection:{sz:'column',lg:'row'},alignItems:{sz:'center',lg:'start'}, gap: '10px',border:'1px solid #91887d',p:'20px',borderLeftWidth:{lg:'0px'}, borderRadius:{sz:'10px',lg:'0px' } }}>
                        <Box>
                            <Box
                                component='p'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: '#66451c',
                                    border: '1px solid #91887d',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    mt: '10px',
                                }}
                            >
                                <SupervisorAccountIcon sx={{ fontSize: '30px' }} />
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle"
                                component='p'
                                sx={{
                                    fontSize: '40px',
                                    fontWeight: 800,
                                    color: '#66451c',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                2K+
                            </Typography>
                            <Typography
                                variant="paragraph"
                                component='p'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#66451c',
                                    mt: '5px',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                REGISTERENTS
                            </Typography>
                        </Box>
                    </Box>

                    <Box gridColumn="span 3" sx={{ display: 'flex', flexDirection:{sz:'column',lg:'row'},alignItems:{sz:'center',lg:'start'}, gap: '10px',border:'1px solid #91887d',p:'20px',borderLeftWidth:{lg:'0px'}, borderRadius:{sz:'10px',lg:'0px' } }}>
                        <Box>
                            <Box
                                component='p'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: '#66451c',
                                    border: '1px solid #91887d',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    mt: '6px',
                                }}
                            >
                                <ManIcon sx={{ fontSize: '30px' }} />
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle"
                                component='p'
                                sx={{
                                    fontSize: '40px',
                                    fontWeight: 800,
                                    color: '#66451c',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                1600+
                            </Typography>
                            <Typography
                                variant="paragraph"
                                component='p'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#66451c',
                                    mt: '5px',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                MANS
                            </Typography>
                        </Box>
                    </Box>

                    <Box gridColumn="span 3" sx={{ display: 'flex', flexDirection:{sz:'column',lg:'row'},alignItems:{sz:'center',lg:'start'}, gap: '10px',border:'1px solid #91887d',p:'20px',borderLeftWidth:{lg:'0px'}, borderRadius:{sz:'10px',lg:'0px' } }}>
                        <Box>
                            <Box
                                component='p'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: '#66451c',
                                    border: '1px solid #91887d',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    mt: '6px',
                                }}
                            >
                                <WomanIcon sx={{ fontSize: '30px' }} />
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle"
                                component='p'
                                sx={{
                                    fontSize: '40px',
                                    fontWeight: 800,
                                    color: '#66451c',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                800+
                            </Typography>
                            <Typography
                                variant="paragraph"
                                component='p'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#66451c',
                                    mt: '5px',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                WOMENS
                            </Typography>
                        </Box>
                    </Box>


                    <Box gridColumn="span 3" sx={{ display: 'flex', flexDirection:{sz:'column',lg:'row'},alignItems:{sz:'center',lg:'start'}, gap: '10px',border:'1px solid #91887d',p:'20px',borderLeftWidth:{lg:'0px'},borderRightWidth:{lg:'0px'}, borderRadius:{sz:'10px',lg:'0px' } }}>
                        <Box>
                            <Box
                                component='p'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: '#66451c',
                                    border: '1px solid #91887d',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    mt: '6px',
                                }}
                            >
                                <FavoriteBorderIcon sx={{ fontSize: '30px' }} />
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle"
                                component='p'
                                sx={{
                                    fontSize: '40px',
                                    fontWeight: 800,
                                    color: '#66451c',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                1200+
                            </Typography>
                            <Typography
                                variant="paragraph"
                                component='p'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#66451c',
                                    mt: '5px',
                                    textAlign:{sz:'center',lg:'left'}
                                }}
                            >
                                Coupled Paired
                            </Typography>
                        </Box>
                    </Box>
                 
                </Box>

            </Box>
        </MatrimonyContainer>
    );
};

export default CounterSection;