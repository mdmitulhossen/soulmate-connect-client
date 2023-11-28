import { Box, Button, Paper } from "@mui/material";
import MatrimonyContainer from "../components/shared/MatrimonyContainer";
import notFoundImage from '../assets/notFound.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <MatrimonyContainer>
            <Paper
                elevation={2}
                sx={{ maxWidth: '700px',minHeight:{sz:'400px',md:'500px'}, my: 5, mx: 'auto', borderRadius: '5px', overflow: 'hidden', border: '1px dashed #000',position:'relative' }}
            >
                <Box
                    component='img'
                    src={notFoundImage}
                    alt='not found'
                    sx={{ width: '100%',height:'100%', borderRadius: '5px' }}
                />
                
                    <Button onClick={()=>navigate('/')} startIcon={<ArrowBackIcon />} sx={{ fontSize: '14px', fontWeight: 600,position:'absolute',top:4,left:4 }} variant="contained" color="warning" size="large" type="submit"> Go Home</Button>
               
            </Paper>

        </MatrimonyContainer>
    );
};

export default NotFoundPage;