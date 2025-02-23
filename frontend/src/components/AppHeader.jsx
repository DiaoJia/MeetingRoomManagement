import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../context/AuthContext";

function AppHeader({ handleCollapsed }) {
    const { logout } = useAuth();
    const HandleLogout = () => {
        logout();
    };

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={handleCollapsed} color="secondary">
                    <MenuTwoToneIcon />
                </IconButton>
                <Box
                    sx={styles.title}>
                    Meeting Room Management
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={() => console.log('Clicked')} color="secondary">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton onClick={() => console.log('Clicked')} color="secondary">
                    <SettingsIcon />
                </IconButton>
                <IconButton onClick={HandleLogout} color="secondary">
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main',
    },
    title: {
        ml: 2,
        fontSize: 20,
        cursor: 'pointer',
    }
};

export default AppHeader;