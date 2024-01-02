import Footer from "./components/Footer";
import Head from "./components/Head";
import SignupBox from "./components/SignupBox";

export default function Signup() {
  return (
    <div>
      <div className="w-screen min-h-screen bg-primaryColor">
        <Head />
        <SignupBox />
        <Footer />
      </div>
    </div>
  );
}
