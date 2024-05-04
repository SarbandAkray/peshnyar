import { Dispatch, useEffect, useState } from "react";
import { Content } from "../../globals";
import Nav from "../home/components/Nav";
import HeaderPart from "./components/HeaderPart";
import { useParams } from "react-router-dom";
import { getdetail } from "./services/getdetails";
import Comments from "./components/Comments";
import BodyPart from "./components/BodyPart";
import { useSelector } from "react-redux";

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

  return (
    <div className="w-screen min-h-screen bg-primaryColor ">
      {content ? (
        <>
          <Nav isSearchAvailable={false} />
          <HeaderPart
            title={content.title}
            img={content.img_url}
            details={content.details}
          />
          <BodyPart
            ratings={content.age_group_specification}
            genres={content.contents_genre}
          />
          <Comments comments={content.reviews} token={token} content_id={id} />
        </>
      ) : null}
    </div>
  );
}
