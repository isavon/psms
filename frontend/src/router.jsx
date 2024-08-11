import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ErrorPage from "./layouts/ErrorPage";
import Dashboard from "./routes/Dashboard";
import MaintenanceCompanies from "./routes/MaintenanceCompanies";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Aircraft from "./routes/Aircraft";
import ServiceRequests from "./routes/ServiceRequests";
import MaintenanceCompaniesForm from "./forms/MaintenanceCompaniesForm";

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
      {
        path: "/maintenance-companies/create",
        element: <MaintenanceCompaniesForm key="companyCreate" />,
      },
      {
        path: "/maintenance-companies/:id",
        element: <MaintenanceCompaniesForm key="companyUpdate" />,
      },
      {
        path: "/aircraft",
        element: <Aircraft />,
      },
      {
        path: "/service-requests",
        element: <ServiceRequests />,
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