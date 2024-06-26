import { Card, CardMedia, Typography } from "@mui/material";

import { baseApiImageUrl } from "../../../global/api/api_url";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import { User } from "../../../models/User";

export default function Content({ content }: { content }) {
  content;
  const navigate = useNavigate();
  const ContentDetails = (content) => {
    navigate(`/content/${content.id}`);
  };
  const user: User = decodeToken(
    useSelector((state: any) => state.user).user_session?.accessToken.toString()
  );

  return (
    <Card
      className="mt-6 mb-4 w-[11em] h-[22em]  sm:w-[20em] sm:h-[33em]  overflow-auto relative z-0"
      onClick={() => ContentDetails(content)}
    >
      <CardMedia
        component="img"
        className="h-60"
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
