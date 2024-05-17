import { Dispatch, useEffect, useState } from "react";
import Nav from "../dashboard/components/Nav";
import { ErrorDialog, SuccessDialog } from "../login/components/Dialog";
import AddContentForm from "./components/addContentForm";
import { useParams } from "react-router";
import { getdetail } from "../GeneralReview/services/getdetails";
import { Content } from "../../../globals";
import UpdateContentForm from "./components/updateContentForm";

export default function ContentsUpdate() {
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
    window.location.href = "/admin/contents";
  };
  const [content, setContent]: [Content, Dispatch<any>] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    details();
  }, [id]);

  const details = async () => {
    const data = await getdetail(parseInt(id));

    setContent(data);
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10 px-10 sm:px-44">
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
          <h1>update Content</h1>
          {content == null ? null : (
            <UpdateContentForm
              handleErrorClickOpen={handleErrorClickOpen}
              handleSuccessClickOpen={handleSuccessClickOpen}
              setErrorMessage={setErrorMessage}
              setSuccessMessage={setSuccessMessage}
              content={content}
            />
          )}
        </div>
      </div>
    </div>
  );
}
