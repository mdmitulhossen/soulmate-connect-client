import { Paper } from "@mui/material";
import CustomTable from "../../../components/shared/CustomTable";

const columns = [
    { id: 'B_ID', label: 'B_ID', minWidth: 100,align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170,align: 'center' },
    { id: 'permanentAddress', label: 'Permanent Address', minWidth: 170,align: 'center' },
    { id: 'occupation', label: 'Occupation', minWidth: 170,align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const rows = [
    { B_ID: '1', name: 'John Doe', permanentAddress: '123 Main St, City, Country', occupation: 'Engineer' },
    { B_ID: '2', name: 'Jane Smith', permanentAddress: '456 Oak St, City, Country', occupation: 'Teacher' },
    { B_ID: '3', name: 'Bob Johnson', permanentAddress: '789 Pine St, City, Country', occupation: 'Doctor' },
    // Add more rows as needed
];
const MyFavouritePage = () => {
    const handleDeleteClick = (index) => {
        // Implement your delete logic here, e.g., remove the row from the 'rows' array.
        console.log('Delete button clicked for index:', index);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'auto' }}>
            <CustomTable columns={columns} rows={rows} handleDeleteClick={handleDeleteClick} />
        </Paper>
    );
};

export default MyFavouritePage;