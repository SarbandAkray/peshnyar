import { Dispatch, Fragment, useEffect, useState } from "react";
import { Content } from "../../globals";
import Nav from "../home/components/Nav";
import HeaderPart from "./components/HeaderPart";
import { useParams } from "react-router-dom";
import { getdetail } from "./services/getdetails";
import Comments from "./components/Comments";
import BodyPart from "./components/BodyPart";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Button as Button1 } from "@mui/base";
import { Tooltip, Typography } from "@mui/material";
import { User } from "../../models/User";
import { decodeToken } from "react-jwt";
import DeletePopUpDialog from "./components/DeletePopUpDialog";

export default function ContentDetails() {
  const [content, setContent]: [Content, Dispatch<any>] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    details();
  }, [id]);

  const details = async () => {
    const data = await getdetail(parseInt(id));
    setContent(data);
  };

  var token = useSelector((state: any) => state.user.user_session);

  const user: User = decodeToken(
    useSelector((state: any) => state.user).user_session?.accessToken.toString()
  );

  const [open, setOpen] = useState(false);
  const [part, setPart] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-screen min-h-screen bg-primaryColor ">
      {content ? (
        <>
          <Nav isSearchAvailable={false} />
          <HeaderPart
            title={content.title}
            img={content.img_url}
            user={user}
            content={content}
            handleClickOpen={handleClickOpen}
          />
          <DeletePopUpDialog
            id={content.id}
            open={open}
            handleClose={handleClose}
          />
          <div className="flex flex-col justify-center mt-5 text-white px-10 py-4 gap-4">
            <div>
              <h5 className="text-white">general review</h5>
              <div className="text-white">
                <h1>{content["details"]}</h1>

                {user != null &&
                  user.auth == "admin" &&
                  user["privlages"].includes("Editing Content") && (
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => {
                        location.href = "/admin/generalReview/" + content["id"];
                      }}
                    >
                      edit
                    </Button>
                  )}
              </div>
            </div>
            <div>
              <h5 className="text-white">islamic review</h5>
              <div className="text-white">
                {}
                <h1>
                  {content["islamicReview"]?.split(" ").map((e, index) => {
                    var reviews = content["islamicReviewMeaning"];

                    if (reviews.some((review) => review["id"] == index)) {
                      return (
                        <Tooltip
                          title={
                            <Fragment>
                              <Typography color="inherit">
                                {
                                  reviews.filter(
                                    (review) => review["id"] == index
                                  )[0]["explaination"]
                                }
                              </Typography>
                            </Fragment>
                          }
                        >
                          <Button1 className="underline">{e + " "}</Button1>
                        </Tooltip>
                      );
                    } else {
                      return " " + e + " ";
                    }
                  })}
                </h1>
                {user != null &&
                  user.auth == "admin" &&
                  user["privlages"].includes("Editing Content") && (
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={(e) => {
                        location.href = "/admin/islamic_review/" + id;
                      }}
                    >
                      edit
                    </Button>
                  )}
              </div>
            </div>
          </div>
          <BodyPart
            ratings={content.age_group_specification}
            genres={content.contents_genre}
            user={user}
            content={content}
          />
          <Comments comments={content.reviews} token={token} content_id={id} />
        </>
      ) : null}
    </div>
  );
}
