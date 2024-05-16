import axios from "axios";
import { baseApiUrl } from "../../../../global/api/api_url";

export const getdetail = async (id: number) => {
  const result = await axios.get(baseApiUrl + "content?id=" + id);
  if (result.data) {
    return result.data;
  } else {
    window.location.href = "/";
  }
};
