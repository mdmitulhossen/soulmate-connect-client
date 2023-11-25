import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { Box } from "@mui/material";

const MainLayout = () => {
    return (
        <div>
            <Box
                component='nav'
                sx={{position:'sticky',top:0,zIndex:1000,width:'100%',bgcolor:'#FEFBF3',}}
            >
                <Navbar />
            </Box>
            <Outlet />
        </div>
    );
};

export default MainLayout;