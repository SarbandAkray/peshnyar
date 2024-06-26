import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";
import { updateUserInfo } from "../../../redux/reducers/userReducer";

export const signup = async (e, dispatch, handleClickOpen, setErrorMessage) => {
  e.preventDefault();
  try {
    var form = e.target;
    if (
      form.email.value == null ||
      form.password.value == null ||
      form.username.value == null
    ) {
      setErrorMessage("Please fill alll the fields");
      handleClickOpen();
    } else {
      var response = await axios.post(`${baseApiUrl}user/register`, {
        email: form.email.value,
        password: form.password.value,
        name: form.username.value,
      });
      if (response.data.accessToken != null) {
        await dispatch(updateUserInfo(response.data));
      } else {
        setErrorMessage(response.data.error);
        handleClickOpen();
      }
    }
  } catch (error) {
    setErrorMessage(error.message);
    handleClickOpen();
  }
};
