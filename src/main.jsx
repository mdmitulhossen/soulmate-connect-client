import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from './routes/Router'
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={Router} />
  </ThemeProvider>
)
