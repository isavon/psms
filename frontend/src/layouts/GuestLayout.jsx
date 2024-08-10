import { Outlet } from "react-router-dom";
import "../styles/guest.css";

export default function GuestLayout() {
  return (
    <div className="d-flex vh-100">
      <main className="form-signin w-100 m-auto">
        <Outlet />
      </main>
    </div>
  );
}