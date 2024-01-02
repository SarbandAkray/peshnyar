import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseApiUrl } from "../../../global/api/api_url";
import Content from "./Content";
export default function Contents({ id }: { id: string }) {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    getContents();
  }, []);
  const getContents = async () => {
    const result = await axios.get(baseApiUrl + "contents/category?id=" + id);
    setContents(result.data.slice(0, 10));
  };

  return contents
    ? contents.map((content) => {
        return (
          <div key={content.id}>
            <Content content={content} />
          </div>
        );
      })
    : null;
}
