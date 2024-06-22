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

import Details from "../pages/AllTrainerPage/Details";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots";
import AddNewSlot from "../pages/Dashboard/Trainer/AddNewSlot";
import AddNewForum from "../pages/Dashboard/Trainer/AddNewForum";
import BecomeTrainer from "../pages/BecomeTrainer/BecomeTrainer";
import AllSubscribers from "../pages/Dashboard/Admin/AllSubscribers";
import AllTrainers from "../pages/Dashboard/Admin/AllTrainers";
import AppliedTrainer from "../pages/Dashboard/Admin/AppliedTrainer";
import Balance from "../pages/Dashboard/Admin/Balance";
import AddNewClass from "../pages/Dashboard/Admin/AddNewClass";
import ActivityLog from "../pages/Dashboard/Member/ActivityLog";
import Profile from "../pages/Dashboard/Common/Profile";
import BookedTrainer from "../pages/Dashboard/Member/BookedTrainer";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import TrainerRoute from "./TrainerRoutes";
import AdminRoute from "./AdminRoute";
import AddForum from "../pages/Dashboard/Admin/AddForum";
import ForumPage from "../pages/ForumPage/ForumPage";
import TrainerBooked from "../pages/TrainerBooked/TrainerBooked";
import PayNow from "../pages/Payment/PayNow";




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
            path: "/pay-now",
            element: <PrivateRoute><PayNow></PayNow></PrivateRoute>,
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
            element: <ForumPage></ForumPage>,
          },
          {
            path: "/slot/:id",
            element: <Details></Details>
          },
          {
            path: "/become-a-trainer",
            element: <PrivateRoute><BecomeTrainer></BecomeTrainer></PrivateRoute>
          },
          {
            path: "/bookingPage",
            element: <PrivateRoute><TrainerBooked></TrainerBooked></PrivateRoute>
          }
      ]
    },

    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [

        {
          index: true,
          element: <PrivateRoute><Statistics></Statistics></PrivateRoute>
        },

        // Trainer route
        {
          path: 'manageSlots',
          element: <PrivateRoute><TrainerRoute><ManageSlots></ManageSlots></TrainerRoute></PrivateRoute>
        },
        {
          path: 'addNewSlot',
          element: <PrivateRoute><TrainerRoute><AddNewSlot></AddNewSlot></TrainerRoute></PrivateRoute>
        },
        {
          path: 'addNewForum',
          element: <PrivateRoute><TrainerRoute><AddNewForum></AddNewForum></TrainerRoute></PrivateRoute>
        },
        // admin route
        {
          path: 'allSubscribers',
          element: <PrivateRoute><AdminRoute><AllSubscribers></AllSubscribers></AdminRoute></PrivateRoute>
        },
        {
          path: 'allTrainers',
          element: <PrivateRoute><AdminRoute><AllTrainers></AllTrainers></AdminRoute></PrivateRoute>
        },
        {
          path: 'appliedTrainer',
          element: <PrivateRoute><AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute></PrivateRoute>
        },
        {
          path: 'balance',
          element: <PrivateRoute><AdminRoute><Balance></Balance></AdminRoute></PrivateRoute>
        },
        {
          path: 'addNewClass',
          element: <PrivateRoute><AdminRoute><AddNewClass></AddNewClass></AdminRoute></PrivateRoute>
        },
        {
          path: 'addForum',
          element: <PrivateRoute><AdminRoute><AddForum></AddForum></AdminRoute></PrivateRoute>
        },

        // member route
        {
          path: 'activityLog',
          element: <PrivateRoute><ActivityLog></ActivityLog></PrivateRoute>
        },
        {
          path: '/dashboard/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: 'bookedTrainer',
          element: <PrivateRoute><BookedTrainer></BookedTrainer></PrivateRoute>
        },
      ], 
    }
  ]);