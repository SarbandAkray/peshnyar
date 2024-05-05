import { userApiCall } from "../../../global/api/user_api_call";

export const postcoment = async (
  e,
  token,
  navigate,
  setLoading,
  handleErrorClickOpen,
  handleSuccessClickOpen,
  setErrorMessage,
  setSuccessMessage,
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
      handleErrorClickOpen();
    } else {
      var response = await userApiCall(
        "content/comment",
        {
          comment: e.target.comment.value.toString(),
          content_id: content_id.toString(),
        },
        {
          authorization: token.accessToken,
        },
        token,
        dispatch
      );
      if (response.data?.success != null) {
        setSuccessMessage("commented added successfully");
        handleSuccessClickOpen();
      } else {
        setErrorMessage("unkown error happened please try again later");
        handleErrorClickOpen();
      }
      setLoading(false);
    }
  }
};
