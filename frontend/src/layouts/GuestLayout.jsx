import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../store/ContentProvider";
import "../styles/guest.css";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <div className="d-flex vh-100">
      <main className="form-signin w-100 m-auto">
        <Outlet />
      </main>
    </div>
  );
}