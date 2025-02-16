import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function AppHeader({handleCollapsed}) {
    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={handleCollapsed} color="secondary">
                    <MenuTwoToneIcon />
                </IconButton>
                <Box
                    component={'img'}
                    sx={styles.appLogo}
                    src="/src/assets/logo.jpg"
                ></Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={() => console.log('Clicked')} color="secondary">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton onClick={() => console.log('Clicked')} color="secondary">
                    <SettingsIcon />
                </IconButton>
                <IconButton onClick={() => console.log('Clicked')} color="secondary">
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
    appLogo: {
        borderRadius: 2,
        width: 80,
        ml: 2,
        cursor: 'pointer',
    }
};

export default AppHeader;