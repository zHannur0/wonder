import { createTheme, ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const theme = createTheme({});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
