import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { query } = useRouter();
  console.log(query);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movie?id=${query.id}`)
      .then((res) => setMovie(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <div className="basis-2/5 p-5">
        <div className="border rounded">hi</div>
      </div>
      <div className="basis-3/5 p-5">
        <img
          src={movie?.poster}
          width={200}
          alt={movie?.title}
          style={{
            height: 500,
            overflow: "hidden",
            objectFit: "cover",
            width: "100%",
          }}
          className="rounded"
        />
        <div className="flex mt-4 h-[400px]">
          <div className="basis-2/6  ">
            <img
              className="rounded-lg"
              src={movie?.poster}
              alt={movie?.title}
              style={{
                height: 400,
                overflow: "hidden",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="basis-4/6 h-full ml-4  ">
            <div className="bg-slate-200 rounded-lg h-full text-center p-5">
              <p className="text-3xl font-medium">{movie?.title}</p>
              <div>
                {movie?.released.slice(0, 4)}, {movie?.type}, {movie?.runtime}m
              </div>
              <div className="flex justify-center gap-10 mt-10">
                <div>
                  <div className="flex">
                    <img
                      className="basis"
                      src={
                        "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                      }
                      width={40}
                      alt="nometer"
                    />
                    <p className="basis text-3xl">
                      {movie?.tomatoes?.viewer?.meter}%
                    </p>
                  </div>
                  <p>TOMATOMETER</p>
                </div>
                <div>
                  <div className="flex">
                    <img
                      className="basis"
                      src={
                        "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                      }
                      width={40}
                      alt="nometer"
                    />
                    <p className="basis text-3xl">
                      {movie?.tomatoes?.viewer?.meter}%
                    </p>
                  </div>
                  <p>TOMATOMETER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
