import { useEffect, useState } from "react";
import { baseApiUrl } from "../../../global/api/api_url";
import axios from "axios";
import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react-refresh/only-export-components
export default function ({
  setContents,
}: {
  setContents: React.Dispatch<React.SetStateAction<string>>;
}) {
  const options = [];

  for (let i = 0; i <= 100; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  const [vsmaller, setVSmaller] = useState("");
  const [vbigger, setVBigger] = useState("");

  const [nsmaller, setNSmaller] = useState("");
  const [nbigger, setNBigger] = useState("");

  const [hsmaller, setHSmaller] = useState("");
  const [hbigger, setHBigger] = useState("");

  const [dsmaller, setDSmaller] = useState("");
  const [dbigger, setDBigger] = useState("");

  const getFilteredData = async () => {
    if (
      vsmaller &&
      vbigger &&
      nsmaller &&
      nbigger &&
      hsmaller &&
      hbigger &&
      dsmaller &&
      dbigger
    ) {
      const data = [
        { id: 1, bigger: vbigger, smaller: vsmaller },
        { id: 2, bigger: nbigger, smaller: nsmaller },
        { id: 3, bigger: hbigger, smaller: hsmaller },
        { id: 4, bigger: dbigger, smaller: dsmaller },
      ];

      const result = await axios.get(
        baseApiUrl +
          "restrictions/specific/contents?specificR=" +
          JSON.stringify(data)
      );

      setContents(result.data);
    } else {
      alert("please fill all the fields");
    }
  };

  return (
    <div className="w-screen items-center justify-center flex mt-4 ">
      <div className="flex max-w-md flex-wrap gap-4 ">
        <div>
          <h1>
            <h1 className="text-white">Violence</h1>
          </h1>
          <div className="flex gap-2">
            <div>
              <p className="text-white">age older</p>
              <select
                name="bigger"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setVBigger(e.target.value)}
              >
                {options}
              </select>
            </div>
            <div>
              <p className="text-white">age younger</p>
              <select
                name="smaller"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setVSmaller(e.target.value)}
              >
                {options}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1>
            <h1 className="text-white">Nudity</h1>
          </h1>
          <div className="flex gap-2">
            <div>
              <p className="text-white">age older</p>
              <select
                name="bigger"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setNBigger(e.target.value)}
              >
                {options}
              </select>
            </div>
            <div>
              <p className="text-white">age younger</p>
              <select
                name="smaller"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setNSmaller(e.target.value)}
              >
                {options}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1>
            <h1 className="text-white">Horror</h1>
          </h1>
          <div className="flex gap-2">
            <div>
              <p className="text-white">age older</p>
              <select
                name="bigger"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setHBigger(e.target.value)}
              >
                {options}
              </select>
            </div>
            <div>
              <p className="text-white">age younger</p>
              <select
                name="smaller"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setHSmaller(e.target.value)}
              >
                {options}
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1>
            <h1 className="text-white">Drugs</h1>
          </h1>
          <div className="flex gap-2">
            <div>
              <p className="text-white">age older</p>
              <select
                name="bigger"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setDBigger(e.target.value)}
              >
                {options}
              </select>
            </div>
            <div>
              <p className="text-white">age younger</p>
              <select
                name="smaller"
                id=""
                className="w-24  mt-2"
                onChange={(e) => setDSmaller(e.target.value)}
              >
                {options}
              </select>
            </div>
          </div>
        </div>

        <Button
          onClick={() => {
            getFilteredData();
          }}
        >
          <p>Search</p>
        </Button>
      </div>
    </div>
  );
}
