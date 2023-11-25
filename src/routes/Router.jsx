import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";


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
          element: <div>Biodatas</div>,
        },
        {
          path: "/aboutUs",
          element: <div>About Us</div>,
        },
        {
          path: "/contactUs",
          element: <div>Contact Us</div>,
        },
        {
          path: "/login",
          element: <div>Login</div>,
        }
      ],
    },
  ]);

export default Router;