import { useEffect } from "react";
import Footer from "./components/Footer";
import Head from "./components/Head";
import LoginBox from "./components/LoginBox";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  var navigate = useNavigate();
  var user = useSelector((state: any) => state.user);
  useEffect(() => {
    if (user.user_session != null) {
      navigate(-1);
    }
  }, [user]);
  return (
    <div>
      <div className="w-screen min-h-screen bg-primaryColor">
        <Head />
        <LoginBox />
        <Footer />
      </div>
    </div>
  );
}
