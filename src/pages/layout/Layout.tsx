import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <div className="h-full">
        <Sidenav />
      </div>
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
