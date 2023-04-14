import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MoviesCard } from "@/components/MoviesCard";

export default function Rating() {
  const route = useRouter();
  const { type } = route.query;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:8000/api/movie/rating", { type: type })
      .then((res) => {
        setMovie(res.data.result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    <div className="ml-10 mt-5">
      <p>Loading...</p>
    </div>;
  } else {
    return (
      <div className="">
        <div className="text-3xl ml-10 mt-10">Rating Type {type}</div>
        <div className="ml-10 mt-5">
          <p className="bg-slate-300 text-center w-24 p-2">
            All {movie.length}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 m-12">
          {movie &&
            movie.map((item, ind) => {
              return <MoviesCard item={item} key={ind} />;
            })}
        </div>
      </div>
    );
  }
}
