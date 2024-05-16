import { Card, CardHeader, CardMedia, Typography } from "@mui/material";

import {
  baseApiImageUrl,
  baseApiUrl,
  baseBackendUrl,
} from "../../../../global/api/api_url";
import { useNavigate } from "react-router-dom";

export default function Content({ content }: { content }) {
  const navigate = useNavigate();
  const ContentDetails = (content) => {
    navigate(`/admin/age_ristriction/${content.id}`);
  };

  return (
    <Card
      className="mt-6 mb-4 w-[11em] h-[22em]  sm:w-[20em] sm:h-[24em] "
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
      </div>
    </Card>
  );
}
