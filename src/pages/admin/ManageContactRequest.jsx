import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Chip, Typography } from '@mui/material';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Spinner from '../../components/Spinner/Spinner';

import toast from "react-hot-toast";
import DataNotFound from '../DataNotFound';

const columns = [
    { id: 'B_ID', label: 'B_ID', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

// const rows = [
//     { B_ID: '1', name: 'John Doe', email: 'john.doe@example.com' },
//     { B_ID: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
//     { B_ID: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     // Add more rows as needed
// ];

const ManageContactRequest = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const queryClient = useQueryClient()

    const axiosPublic = useAxiosPublic()


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // get data from database
    const { data: contactRequestData = [], isLoading, isError } = useQuery({
        queryKey: ['my-contact-request-all-admin'],
        queryFn: async () => {
            const res = await axiosPublic.get('/contactRequest')
            return res.data
        }
    })
    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (updateData) => {
            return await axiosPublic.put('/contactRequest/update', updateData)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(' Approved Contact Successfully');
        },
        onError: () => {
            toast.error("Something went wrong ! isn't Approved")
        },
        onSettled: () => {
            queryClient.invalidateQueries('my-contact-request-all-admin')
        }
    })


    const rows = [];

    if (isLoading || isPending) {
        return <Spinner />
    } else {
        contactRequestData?.contactRequest.map((item) => {
            const newRow = {
                B_ID: item.B_ID,
                name: item.name,
                email: item.email,
                isApproved: item.isApproved
            }
            rows.push(newRow)

        })
    }

    // approve contact request
    const handleApprovedContactClick = (rowData) => {
        // Implement your logic to mark the contact as approved based on B_ID
        const newData = {
            B_ID: rowData.B_ID,
            isApproved: true,
            email: rowData.email,
            name: rowData.name
        }
        mutate(newData)
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
                Manage Contact Request
            </Typography>
            <Paper sx={{ width: '100%', overflow: 'auto', border: '1px dashed #000' }}>
                {
                    contactRequestData?.contactRequest?.length === 0 ? <DataNotFound />
                        :
                        <>
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
                                                                        <Chip disabled={row.isApproved} onClick={() => handleApprovedContactClick(row)} label={row.isApproved ? "Approved" : "Approve Contact"} color="primary" size='small' />
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
                        </>
                }

            </Paper>
        </div>
    );
};

export default ManageContactRequest;