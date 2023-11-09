import Breadcrumbs from "../components/Breadcrumbs";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <nav className="bg-white border  border-black dark:bg-gray-900">
          <h1>Aqua-Minder</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="newuser">New User</NavLink>
          {/* <NavLink to="careers">Careers</NavLink> */}
          <NavLink to="help">Help</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
