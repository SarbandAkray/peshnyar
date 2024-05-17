import { Dispatch, useEffect, useState } from "react";
import { Content } from "../../../globals";
import Nav from "../dashboard/components/Nav";
import HeaderPart from "./components/HeaderPart";
import { useParams } from "react-router-dom";
import { getdetail } from "./services/getdetails";
import BodyPart from "./components/BodyPart";
import { useSelector } from "react-redux";

export default function GiveGeneralReview() {
  const [content, setContent]: [Content, Dispatch<any>] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    details();
  }, [id]);

  const details = async () => {
    const data = await getdetail(parseInt(id));
    setContent(data);
  };

  // var token = useSelector((state: any) => state.user.user_session);

  return (
    <div className="w-screen min-h-screen bg-primaryColor ">
      {content ? (
        <>
          <Nav />
          <HeaderPart
            title={content.title}
            img={content.img_url}
            details={content.details}
          />
          <BodyPart tokens={"token"} id={id} content={content} />
        </>
      ) : null}
    </div>
  );
}
