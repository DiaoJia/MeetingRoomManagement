import { Box, Typography,IconButton } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Meeting() {
    function createData(firstName, lastName, fullName, email, role) {
        return { firstName, lastName, fullName, email, role };
    }

    const rows = [
        createData('Kevin', 'Diao', 'Kevin Diao', 'kevin@gmail.com', 'Admin'),
    ];
    return (
        <Box >
            <Typography variant="h2" sx={styles.appTitle}>Meetings</Typography>
            <TableContainer component={Paper} sx={styles.appTable}>
                <Table aria-label="Users">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Full name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center">Action2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.email}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell >{row.fullName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.role}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => console.log('Clicked')} color="secondary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => console.log('Clicked')} color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appTitle: {
        p: 1
    },
    appTable: {
        m: 1,
        width: '95%'
    }
};


export default Meeting;