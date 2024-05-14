import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import {
  baseApiImageUrl,
  baseApiUrl,
  baseBackendUrl,
} from "../../../global/api/api_url";
import { useNavigate } from "react-router-dom";

export default function Content({ content }: { content }) {
  console.log(content);
  const navigate = useNavigate();
  const ContentDetails = (content) => {
    navigate(`/content/${content.id}`);
  };

  return (
    <Card
      className="mt-6 mb-4 w-[11em] h-[22em]  sm:w-[20em] sm:h-[33em] "
      placeholder={undefined}
      onClick={() => ContentDetails(content)}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-[14em] w-[10em]  ms-2  sm:mx-auto sm:h-[20em] sm:w-[15em]"
        placeholder={undefined}
      >
        <img
          src={baseApiImageUrl + content.img_url}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        className="max-h-[13rem] overflow-auto w-full px-2 py-2 sm:max-h-[100%] sm:overflow-hidden "
      >
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
        >
          {content.title}
        </Typography>
        <Typography
          placeholder={undefined}
          className="hidden sm:block  sm:line-clamp-2"
          variant="small"
        >
          {content.details}
        </Typography>
        <Typography
          className="font-bold p-0"
          placeholder={"undefined"}
          variant="small"
        >
          Genre:{" "}
          {content.contents_genre[0] == null
            ? ""
            : content.contents_genre[0].genre!.name}
        </Typography>
        <Typography
          className="font-bold p-0"
          placeholder={undefined}
          variant="small"
        >
          Restriction:{" "}
          {content.general_age_group[0] == null
            ? ""
            : content.general_age_group[0].age_bigger}{" "}
          yrs -{" "}
          {content.general_age_group[0] == null
            ? ""
            : content.general_age_group[0].age_smaller}{" "}
          yrs
        </Typography>
      </CardBody>
      <div className="max-h-[0rem] overflow-auto sm:max-h-[100%] sm:overflow-hidden">
        <CardFooter className="pt-0" placeholder={undefined}>
          {content.age_group_specification.map((age) => {
            return (
              <Typography className="text-redColor" placeholder={undefined}>
                {age.rating_name.name}
                {""} : {age.age_bigger} yrs - {age.age_smaller} yrs
              </Typography>
            );
          })}
        </CardFooter>
      </div>
    </Card>
  );
}
