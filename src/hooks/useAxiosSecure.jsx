import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: 'https://soulmate-server-iota.vercel.app/api/v1',
    withCredentials: true,
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;