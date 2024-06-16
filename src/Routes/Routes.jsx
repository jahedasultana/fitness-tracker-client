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
            path: "/trainer/:id",
            element: <Details></Details>
          },
          {
            path: "/become-a-trainer",
            element: <BecomeTrainer></BecomeTrainer>
          }
      ]
    },

    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
        {
          path: 'allSubscribers',
          element: <AllSubscribers></AllSubscribers>
        },
        {
          path: 'allTrainers',
          element: <AllTrainers></AllTrainers>
        },
        {
          path: 'appliedTrainer',
          element: <AppliedTrainer></AppliedTrainer>
        },
        {
          path: 'balance',
          element: <Balance></Balance>
        },
        {
          path: 'addNewClass',
          element: <AddNewClass></AddNewClass>
        },
        {
          path: 'activityLog',
          element: <ActivityLog></ActivityLog>
        },
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path: 'bookedTrainer',
          element: <BookedTrainer></BookedTrainer>
        },
      ], 
    }
  ]);