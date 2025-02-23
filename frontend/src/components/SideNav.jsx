import { Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { Link, useLocation } from "react-router";

function SideNav({ collapsed }) {

    const theme = useTheme();
    const location = useLocation();

    return (<Sidebar collapsed={collapsed}
        style={{
            height: '100%',
            top: 'auto',
        }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}
    >
        <Menu
            menuItemStyles={{
                button: ({ active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined
                    };
                },
            }}>
            <MenuItem active={location.pathname === '/'} component={<Link to="/" />} icon={<DashboardOutlinedIcon />}>
                <Typography variant="body2">Dashboard</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/users'} component={<Link to="/users" />} icon={<PeopleAltOutlinedIcon />}>
                <Typography variant="body2">Users</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/rooms'} component={<Link to="/rooms" />} icon={<GroupsOutlinedIcon />}>
                <Typography variant="body2">Meeting rooms</Typography>
            </MenuItem>      
            <MenuItem active={location.pathname === '/booking'} component={<Link to="/booking" />} icon={<AddBusinessOutlinedIcon />}>
                <Typography variant="body2">Booking room</Typography>
            </MenuItem>           
        </Menu>
    </Sidebar>);
}

export default SideNav;