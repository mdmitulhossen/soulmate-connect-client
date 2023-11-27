import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Chip, MenuItem, Select, Typography } from '@mui/material';

const columns = [
    { id: 'userName', label: 'User Name', minWidth: 170, align: 'center'  },
    { id: 'userEmail', label: 'User Email', minWidth: 170, align: 'center'  },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const rows = [
    { userName: 'John Doe', userEmail: 'john.doe@example.com' },
    { userName: 'Jane Smith', userEmail: 'jane.smith@example.com' },
    { userName: 'Bob Johnson', userEmail: 'bob.johnson@example.com' },
    // Add more rows as needed
];

const ManageUser = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleMakeAdminClick = (userName) => {
        // Implement your logic to make the user admin
        console.log(`Make Admin clicked for user: ${userName}`);
    };

    const handleMakePremiumClick = (userName) => {
        // Implement your logic to make the user premium
        console.log(`Make Premium clicked for user: ${userName}`);
    };
    return (
        <div>
            <Typography
                component='p'
                variant='paragraph'
                sx={{
                    fontSize: '24px',
                    fontWeight: 600,
                    mb: 3,
                }}
            >
                User Manage
            </Typography>
            <Paper sx={{ width: '100%', overflow: 'auto',border:'1px dashed #000' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ bgColor: 'red' }}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, rowIndex) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'action' ? (
                                                            <div>
                                                                <Chip onClick={() => handleMakeAdminClick(row.userName)} label="Make Admin" color="primary" size='small' style={{ marginRight: 5 }} />
                                                                <Chip onClick={() => handleMakePremiumClick(row.userName)} label="Make Premium" color="secondary" size='small' />
                                                            </div>
                                                        ) : (
                                                            column.format && typeof value === 'number' ? column.format(value) : value
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default ManageUser;