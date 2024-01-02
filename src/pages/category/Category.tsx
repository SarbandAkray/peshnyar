import { useEffect, useState } from "react";
import Nav from "../home/components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseApiUrl } from "../../global/api/api_url";
import Content from "../home/components/Content";

export default function Category() {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCategoryContents();
  }, [id]);

  const getCategoryContents = async () => {
    const result = await axios.get(baseApiUrl + "contents/category?id=" + id);
    if (result.data.length) {
      setContents(result.data);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <div className="w-screen min-h-screen bg-primaryColor ">
        <Nav setSearch={setSearch} />

        <div className="mt-20">
          {contents.length ? (
            <>
              <div className="w-screen flex justify-center mt-20 mb-10">
                <h1 className="text-white text-4xl">
                  {contents[0].category.name}
                </h1>
              </div>
              <div className="flex justify-center flex-wrap gap-5">
                {contents.map((data) => {
                  return <Content content={data} />;
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
