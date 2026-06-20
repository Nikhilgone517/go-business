import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  if (token && token !== "undefined") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
