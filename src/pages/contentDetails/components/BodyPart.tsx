import React, { useState } from "react";
import { Content } from "../../../globals";
import { Collapse } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function BodyPart({
  ratings,
  genres,
}: {
  ratings: Content["age_group_specification"];
  genres: Content["contents_genre"];
}) {
  const [rating_open, set_rating_open] = useState(false);
  const [arrayStates, setArrayStates] = useState(() =>
    ratings.map((item, index) => ({
      index: index,
      is_open: false,
    }))
  );

  const updateItem = (index: number, newValue: boolean) => {
    setArrayStates((prevState) => {
      const newArray = [...prevState];
      newArray[index] = { ...newArray[index], is_open: newValue };
      return newArray;
    });
  };

  return (
    <div className="px-[2.5rem] pb-5 text-white gap-4">
      <div className="flex mb-5">
        <h1>{genres.length == 1 ? "genre: " : "genres: "}</h1>
        {genres.map((rating) => {
          return <h1>{rating.genre.name} </h1>;
        })}
        <h1>{genres.length == 1 ? "" : ", "}</h1>
      </div>

      <h1>Restrictions:</h1>

      {ratings.map((rating, index) => {
        return (
          <>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => updateItem(index, !arrayStates[index].is_open)}
            >
              {arrayStates[index].is_open ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
              <p>{rating.rating_name.name} : </p>
              <p>
                {rating.age_bigger} - {rating.age_smaller}
              </p>
            </div>
            <Collapse in={arrayStates[index].is_open}>
              <section>{rating.details}</section>
            </Collapse>
          </>
        );
      })}
    </div>
  );
}
