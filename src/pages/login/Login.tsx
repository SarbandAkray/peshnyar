import Footer from "./components/Footer";
import Head from "./components/Head";
import LoginBox from "./components/LoginBox";

export default function Login() {
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
