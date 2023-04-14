import React from "react";

const dt: string[] = [
  "Privacy Policy",
  "Terms and Policies",
  "Cookie Notice",
  "California Notice",
  "Ad Choices",
  "Accessibility",
];

export const Footer = (): JSX.Element => {
  return (
    <div style={{ maxWidth: "1600px" }} className="bg-slate-800 text-white">
      <div className="flex p-5 ">
        <div className="basis-1/4">
          <p>Help</p>
          <p>About Rotten Tomatoes</p>
          <p>Whats the Tomatometer®?</p>
        </div>
        <div className="basis-1/4">
          <p>Critic Submission</p>
          <p>Licensing</p>
          <p>Advertise With Us</p>
          <p>Careers</p>
        </div>
        <div className="basis-1/4 text-center">
          <p className="font-bold">JOIN THE NEWSLETTER</p>
          <p>
            Get the freshest reviews, news, and more delivered right to your
            inbox!
          </p>
          <p className="bg-sky-500 p-2 rounded w-3/5 m-auto">
            JOIN THE NEWSLETTER
          </p>
        </div>
        <div className="basis-1/4">
          <p>FOLLOW US</p>
          <div className="flex gap-2">
            <p className="basis">Icon</p>
            <p className="basis">Icon</p>
            <p className="basis">Icon</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center">
        {dt.map((a, ind) => {
          return (
            <div key={ind} className="basis flex">
              <p className="pr-6">{a}</p>
              <p>|</p>
            </div>
          );
        })}
      </div>
      <div className="text-center text-slate-600 p-5">
        Copyright © Fandango. All rights reserved.
      </div>
    </div>
  );
};
