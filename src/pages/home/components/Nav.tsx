import { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";
import { useTranslation } from "react-i18next";

export default function Nav({
  setSearch,
  isSearchAvailable,
}: {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  isSearchAvailable?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    get_cats();
  }, []);

  const get_cats = async () => {
    const result = await axios.get(baseApiUrl + "categories");

    setCats(result.data);
  };

  return (
    <div className="w-screen flex items-center justify-between px-10 min-h-[5rem] h-fit  bg-lightGray gap-5">
      {/* desktop nav */}
      <div className="flex  sm:flex-col md:flex-col lg:flex-row">
        <img
          src="/assets/home/logo.svg"
          alt=""
          width={100}
          onClick={() => (window.location.href = "/")}
        />
        <ul className="hidden gap-2  items-center justify-between text-white  lg:flex">
          {/* categories */}
          <li className="uppercase text-sm">
            <Menu>
              <MenuHandler>
                <Button
                  className="text-md font-thin focus:border-none"
                  placeholder={undefined}
                >
                  Categories
                </Button>
              </MenuHandler>
              <MenuList
                className="text-md font-thin text-primaryColor"
                placeholder={undefined}
              >
                {cats
                  ? cats.map((cat) => {
                      return (
                        <MenuItem
                          placeholder={undefined}
                          key={cat.id}
                          onClick={() => {
                            navigate("/category/" + cat.id);
                          }}
                        >
                          {cat.name}
                        </MenuItem>
                      );
                    })
                  : null}
              </MenuList>
            </Menu>
          </li>

          {/* languages */}
          <li className="uppercase text-sm">
            <Menu>
              {/* <MenuHandler>
                <Button
                  className="text-md font-thin focus:border-none"
                  placeholder={undefined}
                >
                  Languages
                </Button>
              </MenuHandler> */}
              <MenuList
                className="text-md font-thin text-primaryColor"
                placeholder={undefined}
              >
                <MenuItem placeholder={undefined} onClick={() => {}}>
                  english
                </MenuItem>
                <MenuItem placeholder={undefined} onClick={() => {}}>
                  arabic
                </MenuItem>
                <MenuItem placeholder={undefined} onClick={() => {}}>
                  kurdish
                </MenuItem>
              </MenuList>
            </Menu>
          </li>

          {/* search Engine */}
          <li className="uppercase text-sm">
            <a href="/search">Search Engine</a>
          </li>
        </ul>
      </div>

      {/* search */}
      {isSearchAvailable ? (
        <div className="lg:ms-[-20rem]">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <img
                src="/assets/home/search.svg"
                alt=""
                width={15}
                className="z-10 cursor-pointer"
              />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-lightGray border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setSearchTerm(event.currentTarget.value);
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* user icon instead of humburger menu*/}
      <div className="lg:flex hidden gap-3  text-sm">
        <div
          className="flex gap-2 cursor-pointer items-center"
          onClick={() => (window.location.href = "/login")}
        >
          <img src="/assets/home/user.svg" alt="" width={20} />
          <p className="text-white">{"Test"}</p>
        </div>
      </div>

      {/* hamburger menu */}
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
                onClick={() => (window.location.href = "/")}
              />
            </div>

            <li className="border-b pb-1 border-gray-400 my-8 uppercase">
              <div
                className="flex gap-2 cursor-pointer  "
                onClick={() => (window.location.href = "/login")}
              >
                <img src="/assets/home/user.svg" alt="" width={20} />
                <p className="text-white">{"Test"}</p>
              </div>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <Menu>
                <MenuHandler>
                  <Button
                    className="text-md font-thin focus:border-none"
                    placeholder={undefined}
                  >
                    Categories
                  </Button>
                </MenuHandler>
                <MenuList
                  className="text-md font-thin text-primaryColor"
                  placeholder={undefined}
                >
                  {cats
                    ? cats.map((cat) => {
                        return (
                          <MenuItem
                            placeholder={undefined}
                            key={cat.id}
                            onClick={() => {
                              navigate("/category/" + cat.id);
                            }}
                          >
                            {cat.name}
                          </MenuItem>
                        );
                      })
                    : null}
                </MenuList>
              </Menu>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase flex gap-2">
              <img
                src="/assets/home/search.svg"
                alt=""
                width={15}
                className="z-10 cursor-pointer"
              />
              <a href="/search">Search Engine</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
