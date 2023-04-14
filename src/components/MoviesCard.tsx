import React from "react";
import { IMovie } from "./First";
import { TomatoesMeter } from "./Tomatoesmeter";
import Link from "next/link";

interface IProps {
  item: IMovie;
  key?: number;
}

export const MoviesCard = ({ item }: IProps): JSX.Element => {
  const date = new Date(item.released);
  if (item.poster) {
    return (
      <div className="w-full ">
        <img
          src={item.poster}
          width={200}
          alt={item.title}
          style={{ height: 300, overflow: "hidden" }}
          className="rounded"
        />
        <div className="flex mt-5">
          <TomatoesMeter
            criticMeter={item?.tomatoes?.critic?.meter}
            viewerMeter={item?.tomatoes?.viewer?.meter}
          />
        </div>
        <Link
          href={{
            pathname: "/movies/[date]/[slug]",
            query: { date: "2022-01-01", slug: item.title, id: item._id },
          }} className="movieName">
          <h1>{item.title}</h1>
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};
