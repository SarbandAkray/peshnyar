import { Slider } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../../../global/api/api_url";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default function ({
  setFilteredData,
}: {
  setFilteredData: React.Dispatch<React.SetStateAction<never[]>>;
}) {
  const options = [];

  for (let i = 0; i <= 100; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  const [smaller, setSmaller] = useState("");
  const [bigger, setBigger] = useState("");

  useEffect(() => {
    if (smaller && bigger) {
      getFilteredData();
    }
  }, [smaller, bigger]);

  const getFilteredData = async () => {
    const result = await axios.get(
      baseApiUrl +
        "restrictions/contents?bigger=" +
        bigger +
        "&smaller=" +
        smaller
    );
    console.log(result.data);
    setFilteredData(result.data);
  };

  return (
    <div className="w-screen items-center justify-center flex mt-4 ">
      <div className="flex max-w-md flex-wrap gap-4 ">
        <div>
          <p className="text-white">age older</p>
          <select
            name="bigger"
            id=""
            className="w-24  mt-2"
            onChange={(e) => setBigger(e.target.value)}
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
            onChange={(e) => setSmaller(e.target.value)}
          >
            {options}
          </select>
        </div>
      </div>
    </div>
  );
}
