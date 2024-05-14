import { decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SuperAdminAuthGuard = ({ Element, to = "/admin/login" }) => {
  const user = useSelector((state: any) => state.user);
  if (user.user_session != null) {
    var admin: any = decodeToken(user.user_session.accessToken);
    if (admin.auth == "superAdmin") {
      return Element;
    } else {
      return <Navigate to={to} />;
    }
  } else {
    return <Navigate to={to} />;
  }
};

export default SuperAdminAuthGuard;
