import React from "react";
import { Content } from "../../../globals";

export default function BodyPart({
  ratings,
  genres,
}: {
  ratings: Content["age_group_specification"];
  genres: Content["contents_genre"];
}) {
  return (
    <div className="px-[2.5rem] pb-5 text-white">
      <h1>Restrictions:</h1>
      {ratings.map((rating) => {
        return (
          <div className="flex">
            <h1>{rating.rating_name.name}: </h1>
            <h2>
              {rating.age_bigger} - {rating.age_smaller}
            </h2>
          </div>
        );
      })}

      <h1>genres:</h1>
      {genres.map((rating) => {
        return (
          <div className="flex">
            <h1>{rating.genre.name} </h1>
          </div>
        );
      })}
    </div>
  );
}
