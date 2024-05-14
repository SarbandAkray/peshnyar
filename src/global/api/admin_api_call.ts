import axios from "axios";
import { updateUserInfo } from "../../redux/reducers/userReducer";
import { baseApiUrl } from "./api_url";

export const AdminApiCall = async (path, body, headers, tokens, dispatch) => {
  try {
    var response = await axios.post(baseApiUrl + path, body, {
      headers: headers,
    });
    return response;
  } catch (error) {
    if (error.response?.status == 403) {
      var data = await axios.post(baseApiUrl + "admin/refresh", {
        refresh_token: tokens.refreshToken,
      });
      await dispatch(updateUserInfo(data.data));
      var data2 = await AdminApiCall(path, body, headers, data.data, dispatch);
      return data2;
    } else {
      return { error: "unkown error happened" };
    }
  }
};
