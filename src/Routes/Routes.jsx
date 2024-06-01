import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllTrainerPage from "../pages/AllTrainerPage/AllTrainerPage";
import AllClassesPage from "../pages/AllClassesPage/AllClassesPage";
import Community from "../pages/Community/Community";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: "/register",
            element: <Register></Register>,
          },

          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/allTrainer",
            element: <AllTrainerPage></AllTrainerPage>,
          },
          {
            path: "/allClasses",
            element: <AllClassesPage></AllClassesPage>,
          },
          {
            path: "/community",
            element: <Community></Community>,
          },
      ]
    },
  ]);