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
import { Chip, MenuItem, Select } from '@mui/material';

const columns = [
  { id: 'B_ID', label: 'B_ID', minWidth: 100, align: 'center'},
  { id: 'name', label: 'Name', minWidth: 170, align: 'center'},
  { id: 'email', label: 'Email', minWidth: 170, align: 'center'},
  { id: 'phone', label: 'Mobile No', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'center' }, // Moved 'Status' before 'Action'
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const rows = [
  { B_ID: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Pending' },
  { B_ID: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Approved' },
  { B_ID: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Pending' },
  { B_ID: '4', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Approved' },
  { B_ID: '5', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Pending' },
  { B_ID: '6', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Approved' },
  { B_ID: '7', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Pending' },
  { B_ID: '8', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Approved' },
  { B_ID: '9', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Pending' },
  { B_ID: '10', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Approved' },
  { B_ID: '11', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Pending' },
  { B_ID: '12', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Approved' },
];

const MyContactRequestPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (index) => {
    // Implement your delete logic here, e.g., remove the row from the 'rows' array.
    console.log('Delete button clicked for index:', index);
  };

  const handleStatusChange = (event, rowIndex) => {
    // Implement your logic to update the status in the 'rows' array
    console.log('Status changed to:', event.target.value, 'for row index:', rowIndex);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'auto' }}>
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
                                onChange={(e) => handleStatusChange(e, rowIndex)}
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
    </Paper>
  );
}

export default MyContactRequestPage;
