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

export default function BodyPart({ tokens, id }) {
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
    window.location.href = "/admin/generalReview";
  };

  useEffect(() => {
    getAllGenres();
  }, []);

  const getAllGenres = async () => {
    const result = await axios.get(baseApiUrl + "content/genres");
    setListOfGeneres(
      [...result.data].map((e) => ({ label: e.name, value: e.id }))
    );
  };

  const [loading, setLoading] = useState(false);
  const [listOfGeneres, setListOfGeneres] = useState([]);

  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  async function submitGeneralReview(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    var body = {
      details: e.target["details"].value,
      generes: value,
      id: id,
    };

    var headers = {};

    const data = await AdminApiCall(
      "contents/general_review",
      body,
      headers,
      tokens,
      dispatch
    );
    console.log(data);
    if (data.data.error != null) {
      setErrorMessage(data.data.error);
      handleErrorClickOpen();
    } else {
      setSuccessMessage(data.data.success);
      handleSuccessClickOpen();
    }
    setLoading(false);
  }

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
          onSubmit={(e) => submitGeneralReview(e)}
          className="flex flex-col gap-4"
        >
          <h5 className="">Add details</h5>
          <div>
            <TextareaAutosize
              className="text-black p-5"
              cols={50}
              minRows={10}
              placeholder="General review of the content"
              name="details"
            />
          </div>

          <h1>add Generes</h1>

          {listOfGeneres.length == 0 ? null : (
            <Creatable
              options={listOfGeneres}
              className="text-black"
              name="generes"
              onChange={(newValue) => setValue([...newValue])}
              isMulti={true}
            />
          )}
          <LoadingButton loading={loading} type="submit" variant="contained">
            Add Content Review
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
