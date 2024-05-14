import { useDispatch } from "react-redux";
import { signin } from "../service/login";
import { ErrorDialog } from "./Dialog";
import { useState } from "react";

export default function LoginBox() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-screen  mt-11">
      <ErrorDialog
        open={open}
        handleClose={handleClose}
        errorMessage={errorMessage}
      />
      <div className="w-[20rem] bg-lightGray rounded-t-md text-center p-3">
        <h1 className="text-white">Login Super Admins only</h1>
      </div>
      <form
        onSubmit={(e) => signin(e, dispatch, handleClickOpen, setErrorMessage)}
      >
        <div className="w-[20rem] bg-secondaryColor rounded-b-lg p-2 flex flex-col gap-4 pt-5">
          <div>
            <h1>email</h1>
            <input
              name="email"
              type="text"
              className="bg-white px-2 focus:outline-none rounded-md focus:border-redColor focus:border-2 focus:border- focus:ring-0 w-full"
            />
          </div>

          <div>
            <h1>password</h1>
            <input
              name="password"
              type="password"
              className="bg-white px-2 focus:outline-none rounded-md focus:border-redColor focus:border-2 focus:border- focus:ring-0 w-full"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-start mt-5">
            <button className="bg-lightGray py-2 px-20 text-white focus:border-redColor focus:border-2 ">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
