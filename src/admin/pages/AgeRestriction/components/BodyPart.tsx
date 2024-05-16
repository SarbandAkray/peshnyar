import { FormEvent, Fragment, useRef, useState } from "react";

import { TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Creatable from "react-select/creatable";
import axios from "axios";
import { baseApiUrl } from "../../../../global/api/api_url";
import { AdminApiCall } from "../../../../global/api/admin_api_call";
import { useDispatch } from "react-redux";
import { ErrorDialog, SuccessDialog } from "../../login/components/Dialog";
import { Button, TextareaAutosize } from "@mui/base";
import Tooltip from "@mui/material/Tooltip";
import SliderFilter from "../../../../pages/search/components/SliderFilter";

export default function BodyPart({ tokens, id, content }) {
  const generalRestriction = useRef(null);
  const vialonaceRef = useRef(null);
  const NudityRef = useRef(null);
  const HorrorRef = useRef(null);
  const DrugsRef = useRef(null);
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
    window.location.href = "/admin/age_ristriction";
  };

  const [loading, setLoading] = useState(false);
  const [listOfGeneres, setListOfGeneres] = useState([]);

  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  async function submitAgeRestriction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    let general = generalRestriction.current.getValue();
    let vialonace = vialonaceRef.current.getValue();
    let nudity = NudityRef.current.getValue();
    let horror = HorrorRef.current.getValue();
    let drugs = DrugsRef.current.getValue();

    var body = {
      general: general,
      vialonace: vialonace,
      vialonace_res: e.target["via_res"].value,
      nudity: nudity,
      nudity_res: e.target["nudity_res"].value,
      horror: horror,
      horror_res: e.target["horror_res"].value,
      drugs: drugs,
      drugs_res: e.target["drugs_res"].value,
      id: id,
    };

    var headers = {};

    const data = await AdminApiCall(
      "contents/age_restriction",
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

  return (
    <div className="px-[2.5rem] pb-5 text-white gap-4  ">
      <div className="flex my-5 flex-col gap-4  items-center justify-center ">
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
          onSubmit={(e) => submitAgeRestriction(e)}
          className="flex flex-col gap-4 align-middle items-center  "
        >
          <h5 className="">general review</h5>
          <div>
            <h1>{content["details"]}</h1>
          </div>

          <h5 className="">islamic review</h5>
          <div>
            {}
            <h1>
              {content["islamicReview"].split(" ").map((e, index) => {
                var reviews = content["islamicReviewMeaning"];

                if (reviews.some((review) => review["id"] == index)) {
                  return (
                    <Tooltip
                      title={
                        <Fragment>
                          <Typography color="inherit">
                            {
                              reviews.filter(
                                (review) => review["id"] == index
                              )[0]["explaination"]
                            }
                          </Typography>
                        </Fragment>
                      }
                    >
                      <Button className="underline">{e + " "}</Button>
                    </Tooltip>
                  );
                } else {
                  return " " + e + " ";
                }
              })}
            </h1>
          </div>

          <div className="w-[70rem] flex items-center flex-col mt-6">
            <h1>Select general Restriction</h1>
            <SliderFilter
              name={"general restriction"}
              ref={generalRestriction}
              key={1}
            />
          </div>

          <h1>Select Restrictions</h1>
          <div className="w-[70rem] flex items-center flex-col">
            <SliderFilter name={"violance"} ref={vialonaceRef} key={1} />
            <div className="flex gap-20 items-center w-[30rem]">
              <h1>Reason: </h1>
              <TextareaAutosize
                cols={40}
                minRows={3}
                name="via_res"
                className="bg-white h-10 border-none text-lightGray"
              />
            </div>

            <SliderFilter name={"Nudity"} ref={NudityRef} key={2} />
            <div className="flex gap-20 items-center w-[30rem]">
              <h1>Reason: </h1>
              <TextareaAutosize
                cols={40}
                minRows={3}
                name="nudity_res"
                className="bg-white h-10 border-none text-lightGray"
              />
            </div>
            <SliderFilter name={"Horror"} ref={HorrorRef} key={3} />
            <div className="flex gap-20 items-center w-[30rem]">
              <h1>Reason: </h1>
              <TextareaAutosize
                cols={40}
                minRows={3}
                name="horror_res"
                className="bg-white h-10 border-none text-lightGray"
              />
            </div>
            <SliderFilter name={"Drugs"} ref={DrugsRef} key={4} />
            <div className="flex gap-20 items-center w-[30rem]">
              <h1>Reason: </h1>
              <TextareaAutosize
                cols={40}
                minRows={3}
                name="drugs_res"
                className="bg-white h-10 border-none text-lightGray"
              />
            </div>
          </div>

          <LoadingButton loading={loading} type="submit" variant="contained">
            Add Content Restriction ages
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
