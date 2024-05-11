import { useRef, useState } from "react";
import { baseApiUrl } from "../../../global/api/api_url";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import qs from "qs";
import { Box, InputBase, Typography, alpha, styled } from "@mui/material";
import SliderFilter from "./SliderFilter";
import SearchIcon from "@mui/icons-material/Search";

// eslint-disable-next-line react-refresh/only-export-components
export default function ({
  setContents,
}: {
  setContents: React.Dispatch<React.SetStateAction<any>>;
}) {
  const options = [];

  const vialonaceRef = useRef(null);
  const searchRef = useRef(null);
  const NudityRef = useRef(null);
  const HorrorRef = useRef(null);
  const DrugsRef = useRef(null);

  const getFilteredData = async () => {
    let search = searchRef.current.children[0].value;
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

    const result = await axios.post(
      baseApiUrl + "restrictions/specific/contents",
      {
        search: search,
        ageRestrictions: data,
      }
    );
    console.log(result);

    setContents(result.data);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-5 gap-4 ">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          ref={searchRef}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

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
