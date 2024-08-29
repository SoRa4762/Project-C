import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col p-4 md:px-12">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
