import { useNavigate } from "react-router-dom";
import { Content } from "../../../globals";
import { postcoment } from "../services/postcoment";
import Comment from "./Comment";
// import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { ErrorDialog, SuccessDialog } from "../../login/components/Dialog";
import { useDispatch } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Comments({
  token,
  comments,
  content_id,
}: {
  comments: Content["reviews"];
  token: any;
  content_id: any;
}) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleErrorClickOpen = () => {
    setErrorOpen(true);
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  const handleSuccessClickOpen = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    window.location.reload();
  };

  let navigate = useNavigate();

  var [loadingButton, setLoading] = useState(false);

  var dispatch = useDispatch();

  return (
    <div>
      <section className="bg-gray-900 py-8 px-5 ">
        <ErrorDialog
          open={errorOpen}
          handleClose={handleErrorClose}
          errorMessage={errorMessage}
        />
        <SuccessDialog
          open={successOpen}
          handleClose={handleSuccessClose}
          successText={successMessage}
        />
        <div className="mx-auto px-5 w-full">
          <form
            className="mb-6 max-w-md"
            onSubmit={async (e) =>
              await postcoment(
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
              )
            }
          >
            <div className="py-2 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                className="px-5 py-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <LoadingButton
              type="submit"
              loading={loadingButton}
              className="loadingButton"
              variant="contained"
              // className="bg-red"
              color="error"
            >
              Post comment
            </LoadingButton>
          </form>
          <div className="flex flex-wrap gap-4 ">
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
