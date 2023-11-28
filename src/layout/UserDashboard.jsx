import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import UserSidebar from "../components/Header/UserSidebar";
import Footer from "../components/footer/Footer";
import MatrimonyContainer from "../components/shared/MatrimonyContainer";

const UserDashboard = () => {
    return (
        <div>
            <Paper
                elevation={2}
                component='nav'
                sx={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', bgcolor: '#FEFBF3', }}
            >
                <Navbar />
            </Paper>
            {/* outlet */}
            <MatrimonyContainer>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        my: 6,
                        justifyContent: 'center',
                        flexWrap: { sz: 'wrap', md: 'nowrap' },
                    }}
                >
                    {/* left */}
                    <Box
                        sx={{
                            width: { lg: '30%', md: "50%", sz: '80%' }
                        }}
                    >
                        <UserSidebar />
                    </Box>
                    {/* Right */}
                    <Box
                        sx={{
                            width: { lg: '70%', md: "50%", sz: '80%' }
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </MatrimonyContainer>

            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </div>
    );
};

export default UserDashboard;