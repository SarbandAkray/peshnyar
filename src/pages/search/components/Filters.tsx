import { createRef, useEffect, useRef, useState } from "react";
import { baseApiUrl } from "../../../global/api/api_url";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import Slider from "@mui/material/Slider";
import { Box, Typography, styled } from "@mui/material";
import SliderFilter from "./SliderFilter";

// eslint-disable-next-line react-refresh/only-export-components
export default function ({
  setContents,
}: {
  setContents: React.Dispatch<React.SetStateAction<any>>;
}) {
  const options = [];

  const vialonaceRef = useRef(null);
  const NudityRef = useRef(null);
  const HorrorRef = useRef(null);
  const DrugsRef = useRef(null);

  const getFilteredData = async () => {
    var data = [];
    let vialonace = vialonaceRef.current.getValue();
    let nudity = NudityRef.current.getValue();
    let horror = HorrorRef.current.getValue();
    let drugs = DrugsRef.current.getValue();

    if (vialonace[0] > 0 || vialonace[1] < 100) {
      data.push({ id: 1, bigger: vialonace[0], smaller: vialonace[1] });
    }
    if (nudity[0] > 0 || nudity[1] < 100) {
      data.push({ id: 2, bigger: nudity[0], smaller: nudity[1] });
    }

    if (horror[0] > 0 || horror[1] < 100) {
      data.push({ id: 3, bigger: horror[0], smaller: horror[1] });
    }
    if (drugs[0] > 0 || drugs[1] < 100) {
      data.push({ id: 4, bigger: drugs[0], smaller: drugs[1] });
    }

    const result = await axios.get(
      baseApiUrl +
        "restrictions/specific/contents?specificR=" +
        JSON.stringify(data)
    );

    setContents(result.data);
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-5 gap-4 ">
      <Typography color={"white"}>Filters</Typography>
      <SliderFilter name={"violance"} ref={vialonaceRef} key={1} />
      <SliderFilter name={"Nudity"} ref={NudityRef} key={2} />
      <SliderFilter name={"Horror"} ref={HorrorRef} key={3} />
      <SliderFilter name={"Drugs"} ref={DrugsRef} key={4} />
      <Button
        onClick={() => {
          getFilteredData();
        }}
        placeholder={undefined}
      >
        <p>Search</p>
      </Button>
    </div>
  );
}
