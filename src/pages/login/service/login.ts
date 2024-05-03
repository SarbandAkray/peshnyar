import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";
import { updateUserInfo } from "../../../redux/reducers/userReducer";
import { ErrorDialog } from "../components/Dialog";

export const signin = async (e, dispatch, handleClickOpen, setErrorMessage) => {
  e.preventDefault();
  try {
    var form = e.target;
    if (form.email.value == null || form.password.value == null) {
      alert("Please fill alll the fields");
    } else {
      var response = await axios.post(`${baseApiUrl}user/login`, {
        email: form.email.value,
        password: form.password.value,
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
