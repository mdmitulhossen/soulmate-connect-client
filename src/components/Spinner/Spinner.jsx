import { Box } from "@mui/material";
import { HashLoader } from "react-spinners";


const Spinner = () => {
    return (
        <Box
        sx={{
            width: '100%',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <HashLoader size={60} color="#66451c" />
            {/* <RingLoader size={100} color="#66451c" /> */}
        </Box>
    );
};

export default Spinner;