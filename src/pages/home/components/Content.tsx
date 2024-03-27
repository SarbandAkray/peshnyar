import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../../globals";
import { baseBackendUrl } from "../../../global/api/api_url";
import { useNavigate } from "react-router-dom";

export default function Content({ content }: { content: Content }) {
  const navigate = useNavigate();
  const ContentDetails = (content: Content) => {
    navigate(`/content/${content.id}`);
  };

  return (
    <Card
      className="mt-6 w-[20em]  sm:w-[20em]"
      placeholder={undefined}
      onClick={() => ContentDetails(content)}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-56"
        placeholder={undefined}
      >
        <img
          src={baseBackendUrl + content.img_url}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        className="max-h-[13rem] overflow-auto sm:max-h-[100%]"
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
        >
          {content.title}
        </Typography>
        <Typography placeholder={undefined} className="hidden sm:block">
          {content.details}
        </Typography>
        <Typography className="font-bold" placeholder={"undefined"}>
          Genre: {content.contents_genre[0].genre.name}
        </Typography>
        <Typography className="font-bold" placeholder={undefined}>
          Restriction: {content.general_age_group[0].age_bigger} yrs -{" "}
          {content.general_age_group[0].age_smaller} yrs
        </Typography>
      </CardBody>
      <div className="max-h-[0rem] overflow-auto sm:max-h-[100%]">
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
