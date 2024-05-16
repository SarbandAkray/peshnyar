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
    navigate(`/admin/generalReview/${content.id}`);
  };

  return (
    <Card
      className="mt-6 mb-4 w-[11em] h-12  sm:w-[20em] sm:h-[20em] "
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
          title : {content.title}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Category : {content.category.name}
        </Typography>
      </div>
    </Card>
  );
}
