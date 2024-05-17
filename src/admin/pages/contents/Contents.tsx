import { useState } from "react";
import Nav from "../dashboard/components/Nav";
import { ErrorDialog, SuccessDialog } from "../login/components/Dialog";
import AddContentForm from "./components/addContentForm";

export default function Contents() {
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
          <h1>Add Content</h1>
          <AddContentForm
            handleErrorClickOpen={handleErrorClickOpen}
            handleSuccessClickOpen={handleSuccessClickOpen}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </div>
    </div>
  );
}
