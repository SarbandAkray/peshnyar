import axios from "axios";
import { baseApiUrl } from "../../../global/api/api_url";
import { decodeToken } from "react-jwt";
import { userApiCall } from "../../../global/api/user_api_call";

export const postcoment = async (
  e,
  token,
  navigate,
  setLoading,
  handleClickOpen,
  setErrorMessage,
  content_id,
  dispatch
) => {
  setLoading(true);
  e.preventDefault();
  if (token == null) {
    navigate("/login");
  } else {
    if (e.target.comment.value.toString().trim() == "") {
      setLoading(false);
      setErrorMessage("please enter a comment");
      handleClickOpen();
    } else {
      var user = await decodeToken(token.accessToken);

      var response = await userApiCall(
        "content/comment",
        {
          comment: e.target.comment.value.toString(),
          content_id: content_id.toString(),
          user_id: user["id"],
        },
        {
          authorization: token.accessToken,
        },
        token,
        dispatch
      );
      console.log(response.data);
      setLoading(false);
    }
  }
};
