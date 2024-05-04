import axios, { Axios, AxiosResponse } from "axios";
import { baseApiUrl } from "./api_url";
import { updateUserInfo } from "../../redux/reducers/userReducer";

export const userApiCall = async (path, body, headers, tokens, dispatch) => {
  var response = await axios.post(baseApiUrl + path, body, {
    headers: headers,
  });
  if (response.data.error != null) {
    var data = await axios.post(baseApiUrl + "user/refresh", {
      refresh_token: tokens.refreshToken,
    });
    await dispatch(updateUserInfo(data.data));
    var data2: AxiosResponse<any> = await userApiCall(
      path,
      body,
      headers,
      data.data,
      dispatch
    );
    return data2;
  } else {
    return response;
  }
};
