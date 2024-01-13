import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

  const loginStatus = true;

  if (!loginStatus) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;