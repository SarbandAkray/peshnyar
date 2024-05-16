import { useEffect, useState } from "react";
import Nav from "../dashboard/components/Nav";
import { AdminApiCall } from "../../../global/api/admin_api_call";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/Content";
import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";

export default function AgeRestriction() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    getAllContentForGeneralReview();
  }, []);
  var token = useSelector((state: any) => state.user.user_session);
  var dispatch = useDispatch();
  const getAllContentForGeneralReview = async () => {
    const data = await axios.get(baseApiUrl + "contents/age_ristriction", {
      headers: {
        Accept: "application/json",
      },
    });

    setContents(data.data);
  };
  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10 px-10 sm:px-44">
          <div className="flex justify-center">
            <div className="flex  justify-center flex-wrap  gap-2 w-100 sm:gap-3 md:gap-6">
              {contents
                ? contents.map((content) => {
                    return (
                      <div key={content.id}>
                        <Content content={content} />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
