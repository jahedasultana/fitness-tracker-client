import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </FirebaseProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
