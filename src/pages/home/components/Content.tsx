import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../../globals";

export default function Content({ content }: { content: Content }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={"http://localhost:3000" + content.img_url} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {content.title}
        </Typography>
        <Typography>{content.details}</Typography>
        <Typography className="font-bold">
          Genre: {content.contents_genre[0].genre.name}
        </Typography>
        <Typography className="font-bold">
          Restriction: {content.general_age_group[0].age_bigger} yrs -{" "}
          {content.general_age_group[0].age_smaller} yrs
        </Typography>
      </CardBody>

      <CardFooter className="pt-0">
        {content.age_group_specification.map((age) => {
          return (
            <Typography className="text-redColor">
              {age.rating_name.name}
              {""} : {age.age_bigger} yrs - {age.age_smaller} yrs
            </Typography>
          );
        })}
      </CardFooter>
    </Card>
  );
}
