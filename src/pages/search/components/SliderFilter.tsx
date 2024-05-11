import { Slider, Typography, styled } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

const FilterSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .css-1ucwjgd-MuiSlider-markLabel": { color: "white" },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
export default forwardRef(function SliderFilter(
  {
    name,
  }: {
    name: String;
  },
  ref
) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [value, setValue] = useState<number[]>([0, 100]);

  useImperativeHandle(ref, () => ({
    getValue: getValue,
  }));

  const getValue = () => {
    return value;
  };

  return (
    <div className="flex flex-col justify-around items-center w-screen lg:flex-row md:w-1/2">
      <div className="flex flex-col text-center md:text-left ">
        <Typography color={"white"} style={{ fontSize: 22 }}>
          {name}
        </Typography>
        <Typography color={"white"}>Age</Typography>
      </div>

      <FilterSlider
        className="max-w-xs"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color="primary"
        aria-label="data"
        marks={[
          {
            value: value[0],
            label: value[0],
          },
          {
            value: value[1],
            label: value[1],
          },
        ]}
      />
    </div>
  );
});
