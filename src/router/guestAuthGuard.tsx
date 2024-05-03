import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestAuthGuard = ({ Element }) => {
  const user = useSelector((state: any) => state.user);

  return user.user_session == null ? Element : <Navigate to={"/"} />;
};

export default GuestAuthGuard;
