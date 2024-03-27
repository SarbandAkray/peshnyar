import { baseBackendUrl } from "../../../global/api/api_url";
import { Content } from "../../../globals";

export default function HeaderPart({
  title,
  img,
  details,
}: {
  title: Content["title"];
  img: Content["img_url"];
  details: Content["details"];
}) {
  return (
    <div className="  flex flex-col">
      <div className="flex  justify-center mt-10">
        <img
          src={baseBackendUrl + img}
          alt="Content Image"
          className="w-[20rem]"
        />
      </div>

      <div className="flex  justify-center mt-5 text-white">
        <h1 className="uppercase">{title}</h1>
      </div>

      <div className="flex  justify-center mt-5 text-white px-10 py-4">
        <h5 className="">{details}</h5>
      </div>
    </div>
  );
}
