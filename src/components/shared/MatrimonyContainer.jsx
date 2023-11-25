import { Container } from "@mui/material";


const MatrimonyContainer = ({ children }) => {
    return (
        <Container
            disableGutters
            maxWidth='xl'
            sx={{ px: { xl: '0px', lg: '50px', md: '30px', sm: '20px', sz: '10px' } }}
        >
            {children}
        </Container>
    );
};

export default MatrimonyContainer;