import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Chip, MenuItem, Select, Typography } from '@mui/material';
import CustomTable from '../../../components/shared/CustomTable';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Spinner from '../../../components/Spinner/Spinner';
import toast from "react-hot-toast";
import DataNotFound from '../../DataNotFound';

const columns = [
  { id: 'B_ID', label: 'B_ID', minWidth: 100, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'phone', label: 'Mobile No', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'center' }, // Moved 'Status' before 'Action'
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

// const rows = [
//   { B_ID: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Pending' },
//   { B_ID: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Approved' },
//   { B_ID: '3', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Pending' },
//   { B_ID: '4', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Approved' },
//   { B_ID: '5', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Pending' },
//   { B_ID: '6', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Approved' },
//   { B_ID: '7', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Pending' },
//   { B_ID: '8', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Approved' },
//   { B_ID: '9', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Pending' },
//   { B_ID: '10', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Approved' },
//   { B_ID: '11', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Pending' },
//   { B_ID: '12', name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567', status: 'Approved' },
// ];

const MyContactRequestPage = () => {
  const { user } = useAuth() || {};
  const axiosPublic = useAxiosPublic()
  const queryClient = useQueryClient()

  const { data: contactRequestData = [], isLoading, isError } = useQuery({
    queryKey: ['my-contact-request'],
    queryFn: async () => {
      const res = await axiosPublic(`/contactRequest?email=${user?.email}`)
      return res.data
    }
  })
  // useMutation tanstack query
  const { mutate, isPending } = useMutation({
    mutationFn: async (deletedata) => {
      return await axiosPublic.delete('/contactRequest/delete', deletedata)
    },
    onSuccess: (data) => {
      console.log(data)
      toast.success(' Deleted Successfully');
    },
    onError: () => {
      toast.error("Something went wrong ! isn't delete")
    },
    onSettled: () => {
      queryClient.invalidateQueries('my-contact-request')
    }
  })



  const rows = [];
  if (isLoading || isPending) {
    return <Spinner />
  } else {
    contactRequestData?.contactRequest?.map((item) => {
      const newRow = {
        B_ID: item?.B_ID,
        name: item?.biodata[0]?.name[0],
        email: item.isApproved ? item?.biodata[0]?.email[0] : 'N/A',
        phone: item.isApproved ? item?.biodata[0]?.phone[0] : 'N/A',
        status: item.isApproved ? 'Approved' : 'Pending',
      }
      rows.push(newRow)

    })
  }
  // console.log("aafter push",rows)
  //   console.log(contactRequestData.contactRequest)

  const handleDeleteClick = (rowData) => {
    mutate({ email: rowData.email, B_ID: rowData.B_ID })
  };

  const handleStatusChange = (event, rowIndex) => {
    // Implement your logic to update the status in the 'rows' array
    console.log('Status changed to:', event.target.value, 'for row index:', rowIndex);
  };

  return (
    <Box>
      <Typography
        component='p'
        variant='paragraph'
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          mb: 3,
        }}
      >
        My Contact Request
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'auto' }}>
        {
          contactRequestData?.contactRequest?.length === 0 ? <DataNotFound /> : <CustomTable columns={columns} rows={rows} handleDeleteClick={handleDeleteClick} handleStatusChange={handleStatusChange} />
        }

      </Paper>
    </Box>
  );
}

export default MyContactRequestPage;
