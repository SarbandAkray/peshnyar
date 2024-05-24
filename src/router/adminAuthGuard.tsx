import { decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminAuthGuard = ({
  Element,
  to = "/admin/login",
  privliage = "all",
}) => {
  const user = useSelector((state: any) => state.user);
  var userData = decodeToken(
    useSelector((state: any) => state.user.user_session.accessToken)
  );
  if (user.user_session != null) {
    var admin: any = decodeToken(user.user_session.accessToken);
    if (admin.auth == "admin") {
      if (privliage == "all") {
        return Element;
      } else if (userData["privlages"].includes(privliage)) {
        return Element;
      } else {
        return <Navigate to={to} />;
      }
    } else {
      return <Navigate to={to} />;
    }
  } else {
    return <Navigate to={to} />;
  }
};

export default AdminAuthGuard;
