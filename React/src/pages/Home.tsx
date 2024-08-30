import { IoPersonAdd } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full mt-4 sm:px-12">
        <div className="h-full w-full grid grid-rows-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <Link
            to={"/addcitizen"}
            className="h-full w-full flex items-end pb-4 gap-2 border-2 pl-4 hover:bg-emerald-600 hover:text-white border-emerald-600 rounded-3xl cursor-pointer duration-300"
          >
            <IoPersonAdd fontSize="1.8rem" />{" "}
            <p className="font-bold text-xl">Add Citizen</p>
          </Link>
          <Link
            to={"/citizens"}
            className="h-full w-full flex items-end pb-4 gap-2 border-2 pl-4 hover:bg-emerald-600 hover:text-white border-emerald-600 rounded-3xl cursor-pointer duration-300"
          >
            <HiMiniUserGroup fontSize="2.2rem" />{" "}
            <p className="font-bold text-xl">List Citizens</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
