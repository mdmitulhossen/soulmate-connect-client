import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Chip, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';

const CustomTable = ({ columns, rows,handleDeleteClick,handleStatusChange }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div style={{border:'1px dashed #000'}}>
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
                                                        <Chip onClick={() => handleDeleteClick(row)} label="delete" color="error" size='small'>
                                                            Delete
                                                        </Chip>
                                                    ) : (
                                                        column.id === 'status' ? (
                                                            <Select
                                                                size='small'
                                                                value={row[column.id]}
                                                                onChange={(e) => handleStatusChange(e, row)}
                                                            >
                                                                <MenuItem value="Pending">Pending</MenuItem>
                                                                <MenuItem value="Approved">Approved</MenuItem>
                                                            </Select>
                                                        ) : (
                                                            column.format && typeof value === 'number' ? column.format(value) : value
                                                        )
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
        </div>
    );
};

CustomTable.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
    handleDeleteClick: PropTypes.func,
    handleStatusChange: PropTypes.func
};
export default CustomTable;