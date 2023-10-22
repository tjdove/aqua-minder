import Breadcrumbs from "../components/Breadcrumbs";
import "../globals.css";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Aqua-Minder</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          {/* <NavLink to="careers">Careers</NavLink> */}
          {/* <NavLink to="help">Help</NavLink> */}
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
