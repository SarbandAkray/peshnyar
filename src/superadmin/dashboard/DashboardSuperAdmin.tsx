import { Box, styled } from "@mui/material";
import Nav from "./components/Nav";
import PieCharts from "./components/PieCharts";
import { BarChart, SparkLineChart, axisClasses } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../../global/api/api_url";
import axios from "axios";

const DashboardSuperAdmin = () => {
  const StyledText = styled("text")(({ theme }) => ({
    fill: "white",
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 14,
  }));

  const [dataset, setDataSet] = useState([]);
  const [dataset1, setDataSet1] = useState([]);
  const [dataset2, setDataSet2] = useState([]);
  const [dataset3, setDataSet3] = useState([]);
  const [dataset4, setDataSet4] = useState([]);

  useEffect(() => {
    getChartDatas();
  }, []);

  const getChartDatas = async () => {
    //publish weekly
    const data = await axios.get(
      baseApiUrl + "contents/published_content_weekly"
    );
    setDataSet(
      [...data.data].map((e) => ({
        dayOfWeek: e.dayOfWeek,
        countOfSuccess: parseInt(e.countOfSuccess),
      }))
    );

    const countOfSuccessProducts = await axios.get(
      baseApiUrl + "contents/countOfSuccessProducts"
    );
    setDataSet1(countOfSuccessProducts.data);

    const data2 = await axios.get(baseApiUrl + "contents/countOfGeneralReview");
    setDataSet2(data2.data);

    const data3 = await axios.get(baseApiUrl + "contents/countOfIslamicReview");
    setDataSet3(data3.data);

    const data4 = await axios.get(
      baseApiUrl + "contents/countOfAgeRistriction"
    );
    setDataSet4(data4.data);
  };

  return (
    <div className="w-screen min-h-screen bg-primaryColor ">
      <Nav />
      <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10 px-10 sm:px-44">
        <div className="flex flex-col justify-center">
          <div className="flex  justify-center flex-wrap  gap-2 w-100 sm:gap-3 md:gap-1">
            <PieCharts
              data={[
                {
                  value: dataset1["notSuccessCount"],
                  label: "pending",
                  color: "orange",
                  id: 1,
                },
                {
                  value: dataset1["successCount"],
                  label: "done",
                  color: "green",
                  id: 2,
                },
              ]}
              title={"All Contents"}
            />
            <PieCharts
              data={[
                {
                  value: dataset2["successCount"],
                  label: "pending",
                  color: "red",
                  id: 1,
                },
                {
                  value: dataset2["notSuccessCount"],
                  label: "done",
                  color: "green",
                  id: 2,
                },
              ]}
              title={"Contents In General Review"}
            />
            <PieCharts
              data={[
                {
                  value: dataset3["successCount"],
                  label: "pending",
                  color: "red",
                  id: 1,
                },
                {
                  value: dataset3["notSuccessCount"],
                  label: "done",
                  color: "green",
                  id: 2,
                },
              ]}
              title={"Contents In Islamic Review"}
            />
            <PieCharts
              data={[
                {
                  value: dataset4["successCount"],
                  label: "pending",
                  color: "red",
                  id: 1,
                },
                {
                  value: dataset4["notSuccessCount"],
                  label: "done",
                  color: "green",
                  id: 2,
                },
              ]}
              title={"Contents In Age Resitriction"}
            />
            <BarChart
              colors={["green"]}
              width={500}
              dataset={dataset}
              xAxis={[
                {
                  scaleType: "band",
                  dataKey: "dayOfWeek",
                  tickPlacement: "middle",
                  tickLabelPlacement: "middle",
                },
              ]}
              series={[
                {
                  dataKey: "countOfSuccess",
                  label: "Contents Released",
                },
              ]}
              height={350}
              yAxis={[
                {
                  label: "Contents",
                },
              ]}
              sx={[
                {
                  [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
                    transform: "translateX(-10px)",
                  },
                  ["tspan"]: {
                    fill: "white",
                  },
                },
              ]}
            >
              <StyledText x={200} y={5}>
                Amount of Contents Released this Week
              </StyledText>
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSuperAdmin;
