import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import LoginPage from "../pages/auth/LoginPage";
import RagisterPage from "../pages/auth/RagisterPage";
import BiodatasPage from "../pages/biodatas/BiodatasPage";
import AboutUsPage from "../pages/about/AboutUsPage";
import ContactUsPage from "../pages/contact/ContactUsPage";
import BiodataDetailsPage from "../pages/biodatadetails/BiodataDetailsPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import UserDashboard from "../layout/UserDashboard";
import UserHomeDashboard from "../pages/userDashboard/UserHomeDashboard";
import EditBioData from "../pages/userDashboard/editBiodata/EditBioData";
import ViewBioData from "../pages/userDashboard/viewBiodata/ViewBioData";
import MyContactRequestPage from "../pages/userDashboard/myContactRequest/MyContactRequestPage";
import MyFavouritePage from "../pages/userDashboard/myFavouritePage/MyFavouritePage";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUser from "../pages/admin/ManageUser";
import ManagePremium from "../pages/admin/ManagePremium";
import ManageContactRequest from "../pages/admin/ManageContactRequest";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<NotFoundPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/biodatas",
          element: <BiodatasPage/>,
        },
        {
          path: "/biodata/:id",
          element: <PrivateRoute><BiodataDetailsPage/></PrivateRoute>,
        },
        {
          path: "/aboutUs",
          element: <AboutUsPage/>,
        },
        {
          path: "/contactUs",
          element: <ContactUsPage/>,
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>,
        },
        {
          path: "/login",
          element: <LoginPage/>,
        },
        {
          path: "/ragister",
          element: <RagisterPage/>,
        }
      ],
    },
    {
      path:'/dashboard/user',
      element:<PrivateRoute><UserDashboard/></PrivateRoute>,
      errorElement:<NotFoundPage/>,
      children:[
        {
          index:true,
          element:<PrivateRoute><UserHomeDashboard/></PrivateRoute>
        },
        {
          path:'editbio',
          element:<PrivateRoute><EditBioData/></PrivateRoute>
        },
        {
          path:'viewBioData',
          element:<PrivateRoute><ViewBioData/></PrivateRoute>
        },
        {
          path:'contactRequest',
          element:<PrivateRoute><MyContactRequestPage/></PrivateRoute>
        },
        {
          path:'favourite',
          element:<PrivateRoute><MyFavouritePage/></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard/admin',
      element:<AdminLayout/>,
      errorElement:<NotFoundPage/>,
      children:[
        {
          index:true,
          element:<AdminDashboard/>
        },
        {
          path:'manageUser',
          element:<ManageUser/>
        },
        {
          path:'approvedPremium',
          element:<ManagePremium/>
        },
        {
          path:'approvedContactRequest',
          element:<ManageContactRequest/>
        }
      ]
    }
  ]);

export default Router;