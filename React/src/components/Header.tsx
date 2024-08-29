import { useAuth } from "../customHooks/useAuth";

const Header = () => {
  const { logout } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-emerald-600 text-2xl md:text-3xl lg:text-4xl font-bold">
          Citizenship
        </h1>
        <button
          onClick={logout}
          className="h-10 md:h-14 w-24 bg-red-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-red-800"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;
