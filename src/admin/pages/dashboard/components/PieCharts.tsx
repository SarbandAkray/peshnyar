import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material";

export default function PieCharts({ data, title }) {
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + 400 / 2} y={50}>
        {children}
      </StyledText>
    );
  }
  return (
    <PieChart
      width={500}
      height={500}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
          color: "white",
        },
        ["text"]: {
          fill: "white !important",
        },
      }}
      series={[
        {
          data: data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 360,
          cx: 200,
          cy: 200,
        },
      ]}
    >
      <PieCenterLabel>{title}</PieCenterLabel>
    </PieChart>
  );
}
