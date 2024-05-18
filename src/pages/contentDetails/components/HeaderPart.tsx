import { Button } from "@mui/material";
import {
  baseApiImageUrl,
  baseApiUrl,
  baseBackendUrl,
} from "../../../global/api/api_url";
import { Content } from "../../../globals";
import { User } from "../../../models/User";

export default function HeaderPart({
  title,
  img,
  user,
  content,
  handleClickOpen,
}: {
  title: Content["title"];
  img: Content["img_url"];
  user: User;
  content: any;
  handleClickOpen: any;
}) {
  return (
    <div className="  flex flex-col">
      <div className="flex  justify-center mt-5 text-white">
        {user != null && user.auth == "admin" && (
          <Button
            variant="contained"
            color="error"
            className="w-28"
            onClick={() => {
              handleClickOpen();
            }}
          >
            Delete
          </Button>
        )}
      </div>
      <div className="flex  justify-center mt-10">
        <img
          src={baseApiImageUrl + img}
          alt="Content Image"
          className="w-[20rem]"
        />
      </div>

      <div className="flex  justify-center mt-5 text-white">
        <h1 className="uppercase">{title}</h1>
      </div>

      <div className="flex  justify-center mt-5 text-white">
        {user != null && user.auth == "admin" && (
          <Button
            variant="contained"
            color="warning"
            className="w-28"
            onClick={() => {
              location.href = "/admin/contents/" + content.id;
            }}
          >
            edit
          </Button>
        )}
      </div>
    </div>
  );
}
