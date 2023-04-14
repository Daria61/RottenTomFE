import React, { useEffect, useReducer } from "react";
import { Sort } from "@/components/Sort";
import axios from "axios";
import { useRouter } from "next/router";
import { IMovie } from "@/components/First";
import { MoviesCard } from "@/components/MoviesCard";
import { PageNum } from "@/components/PageNum";
import { GetServerSideProps } from "next";

interface myProps {
  message: string;
  result: Array<IMovie>;
  rowCount: number;
}

export default function Movies({ message, result, rowCount }: myProps) {
  const pageAll = Math.floor(rowCount / 30);

  return (
    <div className="p-4">
      <div className="flex gap-3 content-center">
        <p className="text-[32px]">Movies in Theaters (April 2023)</p>
        <div className="flex border rounded h-full p-2 align-baseline hoverbutton">
          <p>IN THEATERS</p>
        </div>
      </div>
      <Sort />
      <div className="grid grid-cols-6 gap-4 my-5">
        {result.map((item, ind) => {
          return <MoviesCard item={item} key={ind} />;
        })}
      </div>
      <div className="text-center">
        <PageNum pageAll={pageAll} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (param) => {
  console.log(param.query);

  const pageSize = param.query ? (param.query.id ? param.query.id : 1) : 1;

  const res = await axios.post("http://localhost:8000/api/movies", {
    pageSize: pageSize,
  });

  return {
    props: {
      message: "Welcome to Server Side Props",
      result: res.data.result,
      rowCount: res.data.rowCount,
    },
  };
};
