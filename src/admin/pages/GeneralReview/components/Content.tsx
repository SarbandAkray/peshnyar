import { Card, CardHeader, CardMedia, Typography } from "@mui/material";

import {
  baseApiImageUrl,
  baseApiUrl,
  baseBackendUrl,
} from "../../../../global/api/api_url";
import { useNavigate } from "react-router-dom";

export default function Content({ content }: { content }) {
  console.log(content);
  const navigate = useNavigate();
  const ContentDetails = (content) => {
    navigate(`/admin/generalReview/${content.id}`);
  };

  return (
    <Card
      className="mt-6 mb-4 w-[11em] h-[22em]  sm:w-[20em] sm:h-[33em] "
      onClick={() => ContentDetails(content)}
    >
      <CardMedia
        component="img"
        height="194"
        image={baseApiImageUrl + content.img_url}
        src={baseApiImageUrl + content.img_url}
      />

      <div className="max-h-[13rem] overflow-auto w-full px-4 py-4 sm:max-h-[100%] sm:overflow-hidden ">
        <Typography color="blue-gray" className="mb-2">
          {content.title}
        </Typography>
        <Typography className="hidden sm:block  sm:line-clamp-2">
          {content.details}
        </Typography>
        <Typography className="font-bold p-0">
          Genre:{" "}
          {content.contents_genre[0] == null
            ? ""
            : content.contents_genre[0].genre!.name}
        </Typography>
        <div className="font-bold p-0">
          Restriction:{" "}
          {content.general_age_group[0] == null
            ? ""
            : content.general_age_group[0].age_bigger}{" "}
          yrs -{" "}
          {content.general_age_group[0] == null
            ? ""
            : content.general_age_group[0].age_smaller}{" "}
          yrs
        </div>
      </div>
      <div className="max-h-[0rem] overflow-auto sm:max-h-[100%] sm:overflow-hidden">
        <div className="pt-0  px-4 py-4">
          {content.age_group_specification.map((age) => {
            return (
              <Typography className="text-redColor">
                {age.rating_name.name}
                {""} : {age.age_bigger} yrs - {age.age_smaller} yrs
              </Typography>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
