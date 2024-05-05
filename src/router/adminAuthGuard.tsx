import { decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminAuthGuard = ({ Element }) => {
  const user = useSelector((state: any) => state.user);
  if (user.user_session != null) {
    var admin: any = decodeToken(user.user_session.accessToken);
    console.log(admin);
    if (admin.auth == "admin") {
      return Element;
    } else {
      return <Navigate to="/admin/login" />;
    }
  } else {
    return <Navigate to="/admin/login" />;
  }
};

export default AdminAuthGuard;
