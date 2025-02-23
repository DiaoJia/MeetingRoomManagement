import { Box, Typography, IconButton, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";

function MeetingRoom() {

    const navigate = useNavigate();

    const handleAddRoom = () => {
        navigate('/add-room');
    };


    function createData(name, capacity, type, status, description) {
        return { name, capacity, type, status, description };
    }

    const rows = [
        createData('Room 1', 10, 'Standard room','Available', 'Standard meeting room'),
        createData('Room 2', 10, 'Premium room','In use', 'Premium meeting room'),
    ];
    return (
        <Box >
            <Box sx={styles.header}>
                <Typography variant="h4" sx={styles.title}>Meeting Rooms</Typography>
                <Button variant="outlined" sx={styles.addButton} onClick={handleAddRoom}>Add room</Button>
            </Box>
            <TableContainer component={Paper} sx={styles.appTable}>
                <Table aria-label="Users">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell>capacity</TableCell>
                            <TableCell>type</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell>description</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.capacity}</TableCell>
                                <TableCell >{row.type}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell >{row.description}</TableCell>
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
    header: {
        display: "flex",
        justifyContent: "space-between",
        width: '95%'
    },
    title: {
        p: 1
    },
    addButton: {
        mt: 1,
        mb: 1
    },
    appTable: {
        m: 1,
        width: '95%'
    }
};


export default MeetingRoom;