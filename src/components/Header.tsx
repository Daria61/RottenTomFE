import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";

export const Header = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const route = useRouter();

  const enterHandle = (event: KeyboardEvent) => {
    if (event.code == "Enter") {
      route.push(`/search?search=${search}`);
      setSearch("");
    }
  };

  return (
    <div
      style={{ maxWidth: "1600px" }}
      className="flex bg-red-600 h-30 p-10 text-white">
      <div className="basis-1/5">
        <img
          style={{ height: "50px" }}
          alt="Rotten Tomatoes"
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          onClick={() => {
            route.push("/");
          }}
        />
      </div>
      <div className="basis-2/5 ">
        <input
          value={search}
          className="w-3/4 rounded-full border p-1 bg-black/50 border-white bg-grey "
          placeholder="Search movies, TV, actors, more..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(event) => {
            enterHandle(event);
          }}
        />
      </div>
      <div className="flex basis-2/5 justify-between">
        <p>
          <Link href={"/movies?id=1"}>MOVIES</Link>
        </p>
        <p>TV SHOWS</p>
        <p>MOVIES TRIVIA</p>
        <p>NEWS</p>
        <p>SHOWTIME</p>
      </div>
    </div>
  );
};
