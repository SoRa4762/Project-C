import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

const ProtectedRoutes: React.FC<{
  redirectPath: string;
}> = ({ redirectPath = "/" }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
