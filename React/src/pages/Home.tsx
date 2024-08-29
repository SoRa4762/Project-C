import { IoPersonAdd } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full mt-4 sm:px-12">
        <div className="h-full w-full grid grid-rows-8 sm:grid-cols-2 gap-4 sm:gap-8">
          <Link
            to={"/addcitizen"}
            className="h-full w-full flex items-center gap-2 border-2 pl-4 hover:bg-emerald-600 hover:text-white border-emerald-600 rounded-md cursor-pointer duration-300"
          >
            <IoPersonAdd fontSize="1.6rem" />{" "}
            <p className="font-bold">Add Citizen</p>
          </Link>
          <Link
            to={"/citizens"}
            className="h-full w-full flex items-center gap-2 border-2 pl-4 hover:bg-emerald-600 hover:text-white border-emerald-600 rounded-md cursor-pointer duration-300"
          >
            <HiMiniUserGroup fontSize="2rem" />{" "}
            <p className="font-bold">List Citizens</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
