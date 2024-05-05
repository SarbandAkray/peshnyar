import axios, { Axios, AxiosResponse } from "axios";
import { baseApiUrl } from "./api_url";
import { updateUserInfo } from "../../redux/reducers/userReducer";

export const userApiCall = async (path, body, headers, tokens, dispatch) => {
  try {
    var response = await axios.post(baseApiUrl + path, body, {
      headers: headers,
    });
    return response;
  } catch (error) {
    if (error.response?.status == 403) {
      var data = await axios.post(baseApiUrl + "user/refresh", {
        refresh_token: tokens.refreshToken,
      });
      await dispatch(updateUserInfo(data.data));
      var data2 = await userApiCall(path, body, headers, data.data, dispatch);
      return data2;
    } else {
      return { error: "unkown error happened" };
    }
  }
};
