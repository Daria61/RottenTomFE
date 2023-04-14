import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { log } from "console";
const filters = [
  {
    id: 1,
    text: "Most Popular",
  },
  {
    id: 1,
    text: "New",
  },
  {
    id: 1,
    text: "A-Z",
  },
  {
    id: 1,
    text: "Tomateos (Highest)",
  },
  {
    id: 1,
    text: "Tomateos (Lowest)",
  },
];

export const Sort = (): JSX.Element => {
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState([]);
  const [searchByGenre, setSearchByGenre] = useState([]);
  const route = useRouter();
  const [checkbox, setCheckbox] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies/genres")
      .then((res) => {
        setGenre(res.data.result.genres);
        setRating(res.data.result.rating);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex gap-5 mt-10">
        <div className="basis-1/12">
          <div>
            <Menu as="div" className="relative inline-block mx-1">
              <div>
                <Menu.Button className=" hoverbutton inline-flex w-full justify-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  SORT
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {filters.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                            {item.text}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="basis-1/12">
          <div>
            <Menu as="div" className="relative inline-block mx-1">
              <div>
                <Menu.Button className=" hoverbutton inline-flex w-full  justify-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  GENRE
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 mt-2 w-48 h-[400px] overflow-scroll origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {genre?.map((item, index) => (
                      <Menu.Item key={index}>
                        <div
                          className="flex p-1"
                          onClick={(e) => {
                            e.preventDefault();
                          }}>
                          <label
                            className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                            htmlFor={item._id}>
                            {item._id}
                          </label>
                          <input
                            name={item._id}
                            type="checkbox"
                            checked={searchByGenre.includes(item?._id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSearchByGenre([
                                  ...searchByGenre,
                                  e.target.name,
                                ]);
                              } else {
                                setSearchByGenre(
                                  searchByGenre.filter(
                                    (a) => a !== e.target.name
                                  )
                                );
                              }
                            }}
                          />
                          {/* <input
                            name={item._id}
                            type="checkbox"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSearchByGenre([
                                  ...searchByGenre,
                                  e.target.name,
                                ]);
                              } else {
                                setSearchByGenre(
                                  searchByGenre.filter(
                                    (a) => a !== e.target.name
                                  )
                                );
                              }
                            }}
                            checked={searchByGenre.includes(item._id)}
                          /> */}
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                  <div className="absolute bottom-0 sticky flex p-2 bg-white justify-between">
                    <button
                      className="text-sky-400 "
                      onClick={() => setSearchByGenre([])}>
                      Clear All
                    </button>
                    <button
                      className="bg-sky-400 rounded p-1 "
                      onClick={() => {
                        const path = searchByGenre?.join(",");
                        route.push(`/search/genres?types=${path}`);
                      }}>
                      Search
                    </button>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="basis-1/12">
          <div>
            <Menu as="div" className="relative inline-block mx-1">
              <div>
                <Menu.Button className=" hoverbutton inline-flex w-full justify-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  RATIGN
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 mt-2 w-48 h-[400px] overflow-scroll origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {rating?.map((item, index) => (
                      <Menu.Item key={index}>
                        <button
                          className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          onClick={() => route.push(`/rating/?type=${item}`)}>
                          {item}
                        </button>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="basis-2/12">
          <div>
            <p>AUDIENCE SCORE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
