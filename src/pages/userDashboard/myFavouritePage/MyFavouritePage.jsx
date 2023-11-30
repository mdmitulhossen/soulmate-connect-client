import { Box, Paper, Typography } from "@mui/material";
import CustomTable from "../../../components/shared/CustomTable";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner/Spinner";
import DataNotFound from "../../DataNotFound";

const columns = [
    { id: 'B_ID', label: 'B_ID', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'permanentAddress', label: 'Permanent Address', minWidth: 170, align: 'center' },
    { id: 'occupation', label: 'Occupation', minWidth: 170, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

// const rows = [
//     { B_ID: '1', name: 'John Doe', permanentAddress: '123 Main St, City, Country', occupation: 'Engineer' },
//     { B_ID: '2', name: 'Jane Smith', permanentAddress: '456 Oak St, City, Country', occupation: 'Teacher' },
//     { B_ID: '3', name: 'Bob Johnson', permanentAddress: '789 Pine St, City, Country', occupation: 'Doctor' },
//     // Add more rows as needed
// ];
const MyFavouritePage = () => {
    const queryClient = useQueryClient()
    const axiosPublic = useAxiosPublic()
    // userDataFavorite?.favouriteBio
    const { user } = useAuth()

    const { data: userDataFavorite = [], isLoading } = useQuery({
        queryKey: ['userDataFavorite', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/favouriteUser?email=${user?.email}`)
            return res.data
        }
    })

    // console.log(userDataFavorite)

    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (updateData) => {
            return await axiosPublic.put('/users/user', updateData)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(' Deleted Successfully');
        },
        onError: () => {
            toast.error("Something went wrong ! isn't delete")
        },
        onSettled: () => {
            queryClient.invalidateQueries('userDataFavorite')
        }
    })


    const rows = [];
    if (isLoading || isPending) {
        return <Spinner />
    } else {
        userDataFavorite[0]?.matchedBio?.map((item) => {
            const newRow = {
                B_ID: item?.B_ID,
                name: item?.name,
                permanentAddress: item?.parmanentDivision,         
                occupation: item?.occupation,
            }
            rows.push(newRow)

        })
    }

    const handleDeleteClick = (rowData) => {
        // Implement your delete logic here, e.g., remove the row from the 'rows' array.
        console.log('Delete button clicked for index:', rowData);
        const newFavourite = userDataFavorite[0]?.favouriteBio?.filter((item) => item !== rowData?.B_ID)
        mutate({ email: user?.email, favouriteBio: newFavourite })

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
                My Favourite
            </Typography>
            <Paper sx={{ width: '100%', overflow: 'auto' }}>
                {
                    userDataFavorite?.favouriteBio?.length === 0 ? <DataNotFound />
                        :
                        <CustomTable columns={columns} rows={rows} handleDeleteClick={handleDeleteClick} />
                }

            </Paper>
        </Box>
    );
};

export default MyFavouritePage;