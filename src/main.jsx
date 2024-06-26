import { createTheme, ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DeliveryPage from "./pages/delivery.jsx";
import Statistics from "./pages/statistics.jsx";

const theme = createTheme({});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/delivery",
        element: <DeliveryPage/>,
    },
    {
        path: "/statistics",
        element: <Statistics/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
