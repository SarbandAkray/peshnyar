import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../reducers/userReducer";

export const signup = async (e, dispatch) => {
  e.preventDefault();
  var form = e.target;
  if (
    form.email.value == null ||
    form.password.value == null ||
    form.username.value == null
  ) {
    alert("Please fill alll the fields");
  } else {
    var response = await axios.post(`${baseApiUrl}user/register`, {
      email: form.email.value,
      password: form.password.value,
      name: form.username.value,
    });
    console.log(response.data);
    if (response.data.accessToken != null) {
      await dispatch(updateUserInfo(response.data));
    }
  }
};
