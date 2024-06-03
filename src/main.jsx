import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
          <HelmetProvider>
   <QueryClientProvider client={queryClient}>
   <FirebaseProvider>
        <RouterProvider router={router} />
    </FirebaseProvider>
   </QueryClientProvider>
    </HelmetProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
