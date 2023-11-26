import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { Box, Paper } from "@mui/material";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Paper
            elevation={2}
                component='nav'
                sx={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', bgcolor: '#FEFBF3', }}
            >
                <Navbar />
            </Paper>
            <Outlet />
            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </div>
    );
};

export default MainLayout;