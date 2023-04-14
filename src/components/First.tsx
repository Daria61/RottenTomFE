import React, { useEffect, useState } from "react";
import axios from "axios";
import { Poster } from "./Poster";
import { MoviesCard } from "./MoviesCard";

export interface IMovie {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  countries: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    rotten: number;
    lastUpdated: Date;
  };
}

export const First = ({ movies }: { movies: Array<IMovie> }): JSX.Element => {
  return (
    <div>
      <h1></h1>
      <div>
        <Poster />
      </div>
      <div className="grid grid-cols-4 gap-4 m-12">
        {movies &&
          movies.map((item, ind) => {
            return <MoviesCard item={item} key={ind} />;
          })}
      </div>
    </div>
  );
};
