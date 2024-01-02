import { SetStateAction, useState } from "react";
import Nav from "../home/components/Nav";
import Filters from "./components/Filters";
import Content from "../home/components/Content";
export default function Search() {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState([]);

  return (
    <div>
      <div className="w-screen min-h-screen bg-primaryColor ">
        <Nav setSearch={setSearch} />
        <Filters setContents={setContents} />
        <div className="mt-20">
          {contents.length ? (
            <>
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
