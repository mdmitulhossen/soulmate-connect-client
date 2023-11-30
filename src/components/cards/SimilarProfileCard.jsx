import { Box, Paper, Typography } from "@mui/material";
import sarukhimage from '../../assets/BiodataDetails/1.jpeg'


const SimilarProfileCard = ({data}) => {
    return (
        <Paper
        elevation={1}
        sx={{
            width: '100%',
            height: '250px',
            borderRadius: '8px',
            bgcolor: '#fff',
            backgroundImage: `url(${data?.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p:2,
            position: 'relative',
        }}
        >
            <Typography
            component='p'
            variant="title"
             sx={{
                fontSize: '16px',
                color: '#fff',
                fontWeight: 600,

             }}
            >
              {data?.age} years Old
            </Typography>
            <Paper
            elevation={1}
            sx={{
                p:1,
                position: 'absolute',
                bottom: '-30px',
                width:'70%',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '8px',
            }}
            >
              <Typography
                component='p'
                variant="paragraph"
                sx={{
                    fontSize: '16px',
                    color: '#66451c',
                    fontWeight: 600,
                    textAlign: 'center'
                }}
              >
                 {data?.name}
              </Typography>
              <Typography
                component='p'
                variant="paragraph"
                sx={{
                    fontSize: '14px',
                    color: '#66451c',
                    fontWeight: 400,
                    textAlign: 'center',
                    mt:'2px'
                }}
              >
                 CITY: <span style={{fontWeight:600}}>{data?.parmanentDivision}</span>
              </Typography>
            </Paper>
        </Paper>
    );
};

export default SimilarProfileCard;