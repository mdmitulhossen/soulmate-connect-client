import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from './routes/Router'
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from './Context/AuthContextProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </ThemeProvider>
  </AuthContextProvider>
)
