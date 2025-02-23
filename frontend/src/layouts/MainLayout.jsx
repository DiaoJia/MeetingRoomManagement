import { Box } from "@mui/material";
import { useState } from 'react';
import { Navigate, Outlet } from "react-router";
import AppHeader from "../components/AppHeader";
import SideNav from "../components/SideNav";


function MainLayout({ isAuthenticated }) {
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>;
    }
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Box>
            <AppHeader handleCollapsed={handleCollapsed} />
            <Box sx={styles.container}>
                <SideNav collapsed={collapsed} />
                <Box component={'main'} sx={styles.mainSection}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}


/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        display: 'flex',
        bgcolor: 'neutral.light',
        height: 'calc(100vh - 64px)',
    },
    mainSection: {
        p: 1,
        width: '100%',
        height: '100%',
        overflow: 'auto'
    },
};


export default MainLayout;