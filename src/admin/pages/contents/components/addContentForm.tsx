import { Button, TextField, Typography, styled } from "@mui/material";

import Creatable from "react-select/creatable";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminApiCall } from "../../../../global/api/admin_api_call";
import axios from "axios";
import { baseApiUrl } from "../../../../global/api/api_url";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddContentForm({
  handleErrorClickOpen,
  handleSuccessClickOpen,
  setErrorMessage,
  setSuccessMessage,
}) {
  var token = useSelector((state: any) => state.user.user_session);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [listOfCategories, setListOfCategories] = useState([]);
  useEffect(() => {
    getListOfCategories();
  }, []);

  const getListOfCategories = async () => {
    const data = await axios.get(baseApiUrl + "categories");

    setListOfCategories(
      [...data.data].map((e) => ({ label: e.name, value: e.id }))
    );
  };
  const addContent = async (
    e: FormEvent<HTMLFormElement>,
    token,
    dispatch,
    setLoading
  ) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", e.target["ContentImage"].files[0]);
    formData.append("title", e.target["title"].value);
    formData.append("category", e.target["category"].value);
    const headers = {
      "content-type": "multipart/form-data",
      authorization: token.accessToken,
    };
    var data = await AdminApiCall(
      "contents/add",
      formData,
      headers,
      token,
      dispatch
    );
    if (data.data?.success != null) {
      setSuccessMessage(data.data.success);
      handleSuccessClickOpen();
    } else {
      setErrorMessage(data.error);
      handleErrorClickOpen();
    }
    setLoading(false);
  };
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: string = URL.createObjectURL(selectedFile).toString();
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {}, []);

  return (
    <div className="bg-white p-10 rounded-md">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => addContent(e, token, dispatch, setLoading)}
      >
        {selectedFile ? (
          <img src={preview} className="w-56" />
        ) : (
          <img src={"/assets/home/logo.svg"} className="w-56" />
        )}
        <Typography className="text-black">Content Image</Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            name="ContentImage"
            onChange={(e: any) => {
              if (!e.target.files || e.target.files.length === 0) {
                setSelectedFile(undefined);
                return;
              }
              console.log(e.target.files[0]);
              // I've kept this example simple by using the first image instead of multiple
              setSelectedFile(e.target.files[0]);
            }}
          />
        </Button>

        <TextField
          id="filled-basic"
          label="Title"
          variant="outlined"
          name="title"
        />

        {listOfCategories.length == 0 ? null : (
          <Creatable
            options={listOfCategories}
            name="category"
            styles={{
              option: (base) => ({
                ...base,
                color: "black",
              }),
            }}
          />
        )}
        <LoadingButton loading={loading} type="submit" variant="contained">
          Add Content
        </LoadingButton>
      </form>
    </div>
  );
}
