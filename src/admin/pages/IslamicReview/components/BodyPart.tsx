import { FormEvent, useEffect, useState } from "react";
import { Content } from "../../../../globals";

import { TextareaAutosize } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Creatable from "react-select/creatable";
import axios from "axios";
import { baseApiUrl } from "../../../../global/api/api_url";
import { AdminApiCall } from "../../../../global/api/admin_api_call";
import { useDispatch } from "react-redux";
import { ErrorDialog, SuccessDialog } from "../../login/components/Dialog";
import { Button } from "@mui/base";
import WordPopUpDialog from "./wordPopUpDialog";

export default function BodyPart({ tokens, id, content }) {
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
    window.location.href = "/admin/islamic_review";
  };

  const [loading, setLoading] = useState(false);
  const [islamicReview, setIslamicReview] = useState(
    content["islamicReview"].split(" ")
  );
  const [islamicExplenation, setIslamicExplenation] = useState(
    content["islamicReviewMeaning"]
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  async function submitIslamicReview(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    var body = {
      islamic_review: e.target["islamic_review"].value,
      islamicExplenation: islamicExplenation,
      id: id,
    };

    var headers = {};

    const data = await AdminApiCall(
      "contents/islamic_review",
      body,
      headers,
      tokens,
      dispatch
    );

    if (data.data.error != null) {
      setErrorMessage(data.data.error);
      handleErrorClickOpen();
    } else {
      setSuccessMessage(data.data.success);
      handleSuccessClickOpen();
    }
    setLoading(false);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-[2.5rem] pb-5 text-white gap-4">
      <div className="flex my-5 flex-col gap-4  items-center justify-center">
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
        <form
          onSubmit={(e) => submitIslamicReview(e)}
          className="flex flex-col gap-4"
        >
          <h5 className="">Add details</h5>
          <div>
            <TextareaAutosize
              className="text-black p-5"
              style={{ color: "black" }}
              cols={50}
              minRows={10}
              placeholder="General review of the content"
              name="islamic_review"
              onChange={(e) => {
                setIslamicReview(e.target.value.split(" "));
              }}
              defaultValue={content["islamicReview"]}
            />
          </div>

          <h1>add Islamic explination to words:</h1>
          <div className="max-w-[20rem] flex flex-wrap gap-1">
            {islamicReview.length == 0
              ? null
              : islamicReview.map((e, index) => {
                  return (
                    <Button
                      onClick={() => {
                        setIndex(index);
                        setText(e);
                        setOpen(true);
                      }}
                    >
                      {e}
                    </Button>
                  );
                })}
          </div>
          <WordPopUpDialog
            handleClose={handleClose}
            open={open}
            index={index}
            value={text}
            islamicExplenation={islamicExplenation}
            setIslamicExplenation={setIslamicExplenation}
          />

          <LoadingButton loading={loading} type="submit" variant="contained">
            Add Content Islamic Review
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
