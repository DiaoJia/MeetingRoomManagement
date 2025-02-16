import { Box, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function User() {
    function createData(firstName, lastName, fullName, email, role) {
        return { firstName, lastName, fullName, email, role };
    }

    const rows = [
        createData('Kevin', 'Diao', 'Kevin Diao', 'kevin@gmail.com', 'Admin'),
    ];

    return (
        <Box >
            <Typography variant="h2" sx={styles.appTitle}>Users</Typography>
            <TableContainer component={Paper} sx={styles.appTable}>
                <Table aria-label="Users">
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Full name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
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
        m:1,
        width: '95%'
    }
};

export default User;