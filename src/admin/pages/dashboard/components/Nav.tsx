import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();
  var user = decodeToken(
    useSelector((state: any) => state.user.user_session.accessToken)
  );
  useEffect(() => {
    console.log(user["privlages"]);
  }, []);

  return (
    <div className="w-screen flex items-center justify-between px-10 min-h-[5rem] h-fit  bg-lightGray gap-5">
      <div className="flex gap-4 sm:flex-col md:flex-col lg:flex-row">
        <img
          src="/assets/home/logo.svg"
          alt=""
          width={100}
          onClick={() => (window.location.href = "/admin")}
        />
        <ul className="hidden gap-10 items-center justify-between text-white  lg:flex ms-5">
          <li className="uppercase text-sm">
            <a href="/">Users Page</a>
          </li>
          {user["privlages"].includes("Create Content") && (
            <li className="uppercase text-sm">
              <a href="/admin/contents">Contents</a>
            </li>
          )}

          {user["privlages"].includes("General Review") && (
            <li className="uppercase text-sm">
              <a href="/admin/generalReview">General Review</a>
            </li>
          )}

          {user["privlages"].includes("Islamic Review") && (
            <li className="uppercase text-sm">
              <a href="/admin/islamic_review">Islamic Review</a>
            </li>
          )}

          {user["privlages"].includes("Age Restriction") && (
            <li className="uppercase text-sm">
              <a href="/admin/age_ristriction">Age Restriction</a>
            </li>
          )}
        </ul>
      </div>

      {/*  tablet and  desktop*/}
      <div className="lg:flex hidden gap-3  text-sm">
        <div
          className="flex gap-2 cursor-pointer items-center"
          onClick={() => (window.location.href = "/admin/profile")}
        >
          <img src="/assets/home/user.svg" alt="" width={20} />
          <p className="text-white">{"Admin Test"}</p>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <div>
              <img
                src="/assets/home/logo.svg"
                alt=""
                width={200}
                onClick={() => (window.location.href = "/admin")}
              />
            </div>

            <li className="border-b pb-1 border-gray-400 my-8 uppercase">
              <div
                className="flex gap-2 cursor-pointer  "
                onClick={() => (window.location.href = "/admin/profile")}
              >
                <img src="/assets/home/user.svg" alt="" width={20} />
                <p className="text-white">{"Admin Test"}</p>
              </div>
            </li>
            <li className="border-b pb-1 border-gray-400 my-8 uppercase">
              <div
                className="flex gap-2 cursor-pointer  "
                onClick={() => (window.location.href = "/")}
              >
                <p className="text-white">{"Users Page"}</p>
              </div>
            </li>

            {user["privlages"].includes("Create Content") && (
              <li className="border-b pb-1 border-gray-400 my-8 uppercase">
                <div
                  className="flex gap-2 cursor-pointer  "
                  onClick={() => (window.location.href = "/admin/contents")}
                >
                  <p className="text-white">{"Contents"}</p>
                </div>
              </li>
            )}
            {user["privlages"].includes("General Review") && (
              <li className="border-b pb-1 border-gray-400 my-8 uppercase">
                <div
                  className="flex gap-2 cursor-pointer  "
                  onClick={() =>
                    (window.location.href = "/admin/generalreview")
                  }
                >
                  <p className="text-white">{"General Review"}</p>
                </div>
              </li>
            )}

            {user["privlages"].includes("Islamic Review") && (
              <li className="border-b pb-1 border-gray-400 my-8 uppercase">
                <div
                  className="flex gap-2 cursor-pointer  "
                  onClick={() =>
                    (window.location.href = "/admin/islamic_review")
                  }
                >
                  <p className="text-white">{"Islamic Review"}</p>
                </div>
              </li>
            )}

            {user["privlages"].includes("Age Restriction") && (
              <li className="border-b pb-1 border-gray-400 my-8 uppercase">
                <div
                  className="flex gap-2 cursor-pointer  "
                  onClick={() =>
                    (window.location.href = "/admin/age_ristriction")
                  }
                >
                  <p className="text-white">{"Age Restriction"}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
