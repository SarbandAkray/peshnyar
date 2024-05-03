import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import axios from "axios";
import { baseApiUrl } from "../../global/api/api_url";
import Contents from "./components/Contents";
import Content from "./components/Content";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    if (search) {
      searching();
    }
  }, [search]);

  const searching = async () => {
    const result = await axios.get(
      baseApiUrl + "contents/search?title=" + search
    );
    console.log(result.data);
    setSearchedData(result.data);
  };

  const getAllCategories = async () => {
    const result = await axios.get(baseApiUrl + "categories");
    setCategories(result.data.slice(0, 10));
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-primaryColor ">
        <Nav setSearch={setSearch} isSearchAvailable={true} />

        <div className="mt-20">
          {filteredData.length ? (
            <div className="flex justify-center flex-wrap gap-5">
              {filteredData.map((data) => {
                return <Content content={data} />;
              })}
            </div>
          ) : searchedData.length ? (
            <div className="flex justify-center flex-wrap gap-5 ">
              {searchedData.map((data) => {
                return <Content content={data} />;
              })}
            </div>
          ) : (
            categories.map((category: any) => {
              return (
                <>
                  <div className="w-screen flex justify-center mt-20 mb-10">
                    <h1 className="text-white text-4xl">{category.name}</h1>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex  justify-center flex-wrap  gap-2 w-100 sm:gap-3 md:gap-6">
                      <Contents id={category.id} />
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
