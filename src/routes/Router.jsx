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


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
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
          element: <BiodataDetailsPage/>,
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
          element: <CheckoutPage/>,
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
  ]);

export default Router;