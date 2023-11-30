import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/Spinner/Spinner';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();
    const axiosPublic = useAxiosPublic()

    const  {data:userData, isLoading} = useQuery({
        queryKey: ['adminUser',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/user?email=${user?.email}`)
            return res.data
        }
    })


    if (loading||isLoading) {
        return <Spinner></Spinner>
    }
    if (userData?.role?.toLowerCase() === 'admin') {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace />
};

export default AdminRoute;