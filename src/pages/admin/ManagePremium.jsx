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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import Spinner from '../../components/Spinner/Spinner';

const columns = [
    { id: 'B_ID', label: 'B_ID', minWidth: 100 , align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170  , align: 'center'},
    { id: 'email', label: 'Email', minWidth: 170 , align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

// const rows = [
//     { B_ID: '1', name: 'John Doe', email: 'john.doe@example.com' },
//     { B_ID: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
//     { B_ID: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     { B_ID: '4', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     { B_ID: '5', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     { B_ID: '6', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     { B_ID: '7', name: 'Bob Johnson', email: 'bob.johnson@example.com' },
//     // Add more rows as needed
// ];

const ManagePremium = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


      // get data from database
      const { data: premiumBioDataReq = [], isLoading, isError } = useQuery({
        queryKey: ['premiumBioDataReq'],
        queryFn: async () => {
            const res = await axiosPublic.get('/premiumBio')
            return res.data
        }
    })

    console.log(premiumBioDataReq)
    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (updateData) => {
            return await axiosPublic.put('/premiumBio/update', updateData)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(' Premium Successfully');
        },
        onError: () => {
            toast.error("Something went wrong ! isn't Premium")
        },
        onSettled: () => {
            queryClient.invalidateQueries('premiumBioDataReq')
        }
    })

    const rows = [];

    if (isLoading || isPending) {
        return <Spinner />
    } else {
        premiumBioDataReq?.map((item) => {
            const newRow = {
                B_ID: item.B_ID,
                name: item.name,
                email: item.email,
                isPremium: item.isPremium
            }
            rows.push(newRow)
        })
    }


    const handleMakePremiumClick = (rowData) => {
        // Implement your logic to make the user premium based on B_ID
        
        const newData = {
            isPremium: true,
            email: rowData?.email,
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
                Manage Premium
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
                                                            <Chip disabled={row?.isPremium} onClick={() => handleMakePremiumClick(row)} label={row?.isPremium?"Premiumed":"Make Premium"} color="secondary" size='small' />
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
                    rowsPerPageOptions={[5,10, 25, 100]}
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

export default ManagePremium;