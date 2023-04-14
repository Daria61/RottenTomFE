import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { MoviesCard } from "@/components/MoviesCard";

export default function Search() {
  const route = useRouter();
  const { types } = route.query;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowCount, setRowCount] = useState();
  const genres = types?.split(",");
  console.log(genres);

  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:8000/api/movies/search/genre", {
        genres: genres,
      })
      .then((res) => {
        setMovie(res.data.result);
        console.log(res.data.result);
        setRowCount(res.data.rowCount);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <div className="text-3xl ml-10 mt-10">Loading...</div>
      </div>
    );
  } else {
    if (movie) {
      return (
        <div className="">
          <div className="text-3xl ml-10 mt-10">Search Result for: {}</div>
          <div className="ml-10 mt-5">
            <p className="bg-slate-300 text-center w-24 p-2">All {rowCount}</p>
          </div>
          <div className="grid grid-cols-4 gap-4 m-12">
            {movie &&
              movie.map((item, ind) => {
                return <MoviesCard item={item} key={ind} />;
              })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-screen">
          <div className="text-3xl ml-10 mt-10">Search Result for: {}</div>
          <div className="ml-10 mt-5">
            <p className="bg-slate-300 text-center w-24 p-2">All {}</p>
          </div>
          <div>
            <h1 className="text-2xl text-red-600 ml-10">Not Found</h1>
          </div>
        </div>
      );
    }
  }
}

// export async function getServerSideProps(pageSize: string) {
//   const res = await axios.post(
//     "http://localhost:8000/api/movies/search/genres",
//     {
//       genres: genres,
//     }
//   );

//   return {
//     props: {
//       message: "Server side Props",
//       result: res.data.result,
//       rowCount: res.data.rowCount,
//     },
//   };
// }
