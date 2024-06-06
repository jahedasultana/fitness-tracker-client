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
import Details from "../pages/AllTrainerPage/Details";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots";
import AddNewSlot from "../pages/Dashboard/Trainer/AddNewSlot";
import AddNewForum from "../pages/Dashboard/Trainer/AddNewForum";



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
          {
            path: "/details/:id",
            element: <Details></Details>
          }
      ]
    },

    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [

        {
          index: true,
          element: <Statistics></Statistics>
        },
        {
          path: 'manageSlots',
          element: <ManageSlots></ManageSlots>
        },
        {
          path: 'addNewSlot',
          element: <AddNewSlot></AddNewSlot>
        },
        {
          path: 'addNewForum',
          element: <AddNewForum></AddNewForum>
        },
      ], 
    }
  ]);