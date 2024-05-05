import { useEffect } from "react";
import Footer from "./components/Footer";
import Head from "./components/Head";
import LoginBox from "./components/LoginBox";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  
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
