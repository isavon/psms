import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ErrorPage from "./layouts/ErrorPage";
import Dashboard from "./routes/Dashboard";
import MaintenanceCompanies from "./routes/MaintenanceCompanies";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/maintenance-companies",
        element: <MaintenanceCompanies />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;